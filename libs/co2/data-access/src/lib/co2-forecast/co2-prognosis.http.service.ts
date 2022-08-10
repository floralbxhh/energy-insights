import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CO2EmissionPrognosis } from './co2-prognosis.model';

@Injectable({
  providedIn: 'root',
})
export class CO2PrognosisHttp {
  get(): Observable<ReadonlyArray<CO2EmissionPrognosis>> {
    return of([]);
  }
}
