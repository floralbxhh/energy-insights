import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { CO2EmisResponse, CO2EmissionPrognosis } from './co2-prognosis.model';

const url =
  'https://api.energidataservice.dk/dataset/CO2Emis?limit=100&offset=0&sort=Minutes5UTC%20DESC&timezone=utc';

const initialParams = {
  limit: 100,
  sort: 'Minutes5UTC DESC',
  timezone: 'utc',
};

@Injectable({
  providedIn: 'root',
})
export class CO2PrognosisHttp {
  constructor(private http: HttpClient) {}

  get(): Observable<ReadonlyArray<CO2EmissionPrognosis>> {
    const params = new HttpParams({ fromObject: initialParams });

    return this.http.get<CO2EmisResponse>(url, { params }).pipe(
      mergeMap(response =>
        response.records
          ? of<ReadonlyArray<CO2EmissionPrognosis>>(
              response.records.map(r => {
                return {
                  co2Emission: r.CO2Emission,
                  minutes5UTC: r.Minutes5UTC,
                  priceArea: r.PriceArea,
                } as CO2EmissionPrognosis;
              })
            )
          : throwError(() => new Error('API Error!'))
      )
    );
  }
}
