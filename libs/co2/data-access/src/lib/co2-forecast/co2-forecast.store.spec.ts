import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { lastValueFrom, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { CO2ForecastStore } from './co2-forecast.store';
import { CO2PrognosisHttp } from './co2-prognosis.http.service';

describe(CO2ForecastStore.name, () => {
  function setup() {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CO2ForecastStore],
    });

    const http = TestBed.inject(CO2PrognosisHttp);
    const getSpy = jest.spyOn(http, 'get').mockReturnValue(of([]));
    const store = TestBed.inject(CO2ForecastStore);

    return {
      getSpy,
      store,
    };
  }

  it('is provided externally', () => {
    const { store } = setup();

    expect(store).not.toBeNull();
  });

  describe('records$', () => {
    it('initially emits 0 records', async () => {
      const { store } = setup();

      const records = await lastValueFrom(store.records$.pipe(first()));
      expect(records).toEqual([]);
    });
  });
});
