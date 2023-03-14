import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeuserComponent } from './deleteeuser.component';

describe('DeleteeuserComponent', () => {
  let component: DeleteeuserComponent;
  let fixture: ComponentFixture<DeleteeuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteeuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
