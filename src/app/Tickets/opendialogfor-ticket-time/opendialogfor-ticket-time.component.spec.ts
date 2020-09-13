import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendialogforTicketTimeComponent } from './opendialogfor-ticket-time.component';

describe('OpendialogforTicketTimeComponent', () => {
  let component: OpendialogforTicketTimeComponent;
  let fixture: ComponentFixture<OpendialogforTicketTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpendialogforTicketTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpendialogforTicketTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
