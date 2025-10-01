import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEstudiante } from './nuevo-estudiante';

describe('NuevoEstudiante', () => {
  let component: NuevoEstudiante;
  let fixture: ComponentFixture<NuevoEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoEstudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoEstudiante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
