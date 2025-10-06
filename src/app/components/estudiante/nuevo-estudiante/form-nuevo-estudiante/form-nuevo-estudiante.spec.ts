import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoEstudiante } from './form-nuevo-estudiante';

describe('FormNuevoEstudiante', () => {
  let component: FormNuevoEstudiante;
  let fixture: ComponentFixture<FormNuevoEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNuevoEstudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNuevoEstudiante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
