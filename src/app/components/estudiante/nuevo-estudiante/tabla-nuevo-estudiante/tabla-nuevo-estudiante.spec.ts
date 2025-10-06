import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaNuevoEstudiante } from './tabla-nuevo-estudiante';

describe('TablaNuevoEstudiante', () => {
  let component: TablaNuevoEstudiante;
  let fixture: ComponentFixture<TablaNuevoEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaNuevoEstudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaNuevoEstudiante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
