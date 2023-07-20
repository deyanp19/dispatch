import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTrucksComponent } from './list-of-trucks.component';

describe('ListOfTrucksComponent', () => {
  let component: ListOfTrucksComponent;
  let fixture: ComponentFixture<ListOfTrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTrucksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
