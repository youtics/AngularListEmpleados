import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCrearComponent } from './empleado-crear.component';

describe('EmpleadoCrearComponent', () => {
  let component: EmpleadoCrearComponent;
  let fixture: ComponentFixture<EmpleadoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
