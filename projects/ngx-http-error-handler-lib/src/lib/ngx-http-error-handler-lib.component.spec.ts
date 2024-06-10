import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHttpErrorHandlerLibComponent } from './ngx-http-error-handler-lib.component';

describe('NgxHttpErrorHandlerLibComponent', () => {
  let component: NgxHttpErrorHandlerLibComponent;
  let fixture: ComponentFixture<NgxHttpErrorHandlerLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxHttpErrorHandlerLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxHttpErrorHandlerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
