import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEstudiante } from './admin-estudiante';

describe('AdminEstudiante', () => {
  let component: AdminEstudiante;
  let fixture: ComponentFixture<AdminEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEstudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEstudiante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
