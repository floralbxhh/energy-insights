import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { CO2PrognosisHttp } from './co2-prognosis.http.service';
describe(CO2PrognosisHttp.name, () => {
  let http!: CO2PrognosisHttp;

  beforeEach(() => {
    http = TestBed.inject(CO2PrognosisHttp);
  });

  it('works', async () => {
    const result = await lastValueFrom(http.get());

    expect(result).toEqual([]);
  });
});
