import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketPicturesComponent } from './add-ticket-pictures.component';

describe('AddTicketPicturesComponent', () => {
  let component: AddTicketPicturesComponent;
  let fixture: ComponentFixture<AddTicketPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTicketPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTicketPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
