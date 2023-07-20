import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDriversComponent } from './list-of-drivers.component';

describe('ListOfDriversComponent', () => {
  let component: ListOfDriversComponent;
  let fixture: ComponentFixture<ListOfDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
