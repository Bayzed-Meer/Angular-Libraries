import { TestBed } from '@angular/core/testing';

import { NgxHttpErrorHandlerLibService } from './ngx-http-error-handler-lib.service';

describe('NgxHttpErrorHandlerLibService', () => {
  let service: NgxHttpErrorHandlerLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHttpErrorHandlerLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
