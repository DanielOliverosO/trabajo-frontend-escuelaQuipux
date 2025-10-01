import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionEstudiante } from './administracion-estudiante';

describe('AdministracionEstudiante', () => {
  let component: AdministracionEstudiante;
  let fixture: ComponentFixture<AdministracionEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministracionEstudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionEstudiante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
