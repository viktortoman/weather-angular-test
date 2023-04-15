import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDataComponent } from './country-data.component';

describe('CountryDataComponent', () => {
  let component: CountryDataComponent;
  let fixture: ComponentFixture<CountryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
