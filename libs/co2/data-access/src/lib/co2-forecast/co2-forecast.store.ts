import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CO2EmissionPrognosis } from './co2-prognosis.model';

export interface CO2ForecastState {
  readonly records: ReadonlyArray<CO2EmissionPrognosis>;
}

@Injectable()
export class CO2ForecastStore extends ComponentStore<CO2ForecastState> {
  constructor() {
    super(initialState);
  }
}
const initialState: CO2ForecastState = {
  records: [],
};
