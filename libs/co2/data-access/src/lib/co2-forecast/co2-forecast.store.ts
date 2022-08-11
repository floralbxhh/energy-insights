import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CO2PrognosisHttp } from './co2-prognosis.http.service';
import { CO2EmissionPrognosis } from './co2-prognosis.model';

interface CO2ForecastState {
  readonly records: ReadonlyArray<CO2EmissionPrognosis>;
}

@Injectable()
export class CO2ForecastStore extends ComponentStore<CO2ForecastState> {
  readonly records$ = this.select(store => store.records, { debounce: true });

  constructor(private co2PrognosisHttp: CO2PrognosisHttp) {
    super(initialState);
    this.loadRecordsEveryMinute(of(undefined));
  }

  private loadRecordsEveryMinute = this.effect(queryFilter$ => {
    return queryFilter$.pipe(
      switchMap(_queryFilter =>
        this.co2PrognosisHttp.get().pipe(
          tapResponse(
            records => this.updateRecords(records),
            error => console.error(error)
          )
        )
      )
    );
  });

  private updateRecords = this.updater(
    (state, records: ReadonlyArray<CO2EmissionPrognosis>) => ({
      ...state,
      records,
    })
  );
}

const initialState: CO2ForecastState = {
  records: [],
};
