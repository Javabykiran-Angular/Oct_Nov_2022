import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparamaterComponent } from './queryparamater.component';

describe('QueryparamaterComponent', () => {
  let component: QueryparamaterComponent;
  let fixture: ComponentFixture<QueryparamaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryparamaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryparamaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
