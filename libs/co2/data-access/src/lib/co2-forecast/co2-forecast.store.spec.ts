import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { first } from 'rxjs/operators';
import { CO2ForecastStore } from './co2-forecast.store';

describe(CO2ForecastStore.name, () => {
  function setup() {
    TestBed.configureTestingModule({
      providers: [CO2ForecastStore],
    });

    const store = TestBed.inject(CO2ForecastStore);

    return {
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
