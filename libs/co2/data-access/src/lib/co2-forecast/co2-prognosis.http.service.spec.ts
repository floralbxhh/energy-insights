import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { CO2PrognosisHttp } from './co2-prognosis.http.service';
import { CO2EmisResponse } from './co2-prognosis.model';

describe(CO2PrognosisHttp.name, () => {
  let controller: HttpTestingController;
  let http!: CO2PrognosisHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    controller = TestBed.inject(HttpTestingController);
    http = TestBed.inject(CO2PrognosisHttp);
  });

  afterEach(() => {
    controller.verify();
  });

  it('emits array of records', async () => {
    //Arrange
    const testResponse: CO2EmisResponse = {
      total: 10,
      sort: '',
      limit: 10,
      dataset: '',
      records: [],
    };

    //Act
    const result = lastValueFrom(http.get());
    const req = controller.expectOne(
      request =>
        request.method === 'GET' &&
        request.url.startsWith(
          'https://api.energidataservice.dk/dataset/CO2Emis'
        )
    );
    req.flush(testResponse);

    //Assert
    expect(await result).toEqual([]);
  });

  it('emits error when no records', async () => {
    //Arrange
    const testResponse: CO2EmisResponse = {
      total: 10,
      sort: '',
      limit: 10,
      dataset: '',
      records: null,
    };

    //Act
    const result = lastValueFrom(http.get());
    const req = controller.expectOne(
      request =>
        request.method === 'GET' &&
        request.url.startsWith(
          'https://api.energidataservice.dk/dataset/CO2Emis'
        )
    );
    req.flush(testResponse);

    //Assert
    expect(result).rejects.toEqual(expect.any(Error));
  });
});
