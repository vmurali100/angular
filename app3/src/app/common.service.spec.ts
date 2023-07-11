import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // include it in the imports array
      providers: [CommonService]

    });
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    service.getUsers()
    expect(service.getUsers).toBeTruthy()
  });
});
