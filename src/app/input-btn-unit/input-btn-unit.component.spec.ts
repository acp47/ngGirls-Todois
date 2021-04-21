import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBtnUnitComponent } from './input-btn-unit.component';

describe('InputBtnUnitComponent', () => {
  let component: InputBtnUnitComponent;
  let fixture: ComponentFixture<InputBtnUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBtnUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBtnUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
