import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableandchartComponent } from './tableandchart.component';

describe('TableandchartComponent', () => {
  let component: TableandchartComponent;
  let fixture: ComponentFixture<TableandchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableandchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableandchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
