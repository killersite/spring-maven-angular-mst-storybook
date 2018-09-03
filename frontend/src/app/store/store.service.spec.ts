import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
  const toastService = jasmine.createSpyObj('toastService', ['test']);
  const loadingBarService = jasmine.createSpyObj('loadingBarService', ['test']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([StoreService], (service: StoreService) => {
    expect(service).toBeTruthy();
  }));
});
