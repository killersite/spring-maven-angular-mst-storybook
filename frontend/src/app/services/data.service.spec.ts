import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
      imports: [HttpClientTestingModule]
    });
  });

  beforeEach(function() {
    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // tslint:disable-next-line:no-shadowed-variable
  it('should be created', inject([DataService], (service: DataService) => {
    // const req = httpMock.expectOne('/api/promos/autocomplete?title=test');
    expect(service).toBeTruthy();
  }));
});
