import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultEstudiante } from './result-estudiante';

describe('ResultEstudiante', () => {
  let component: ResultEstudiante;
  let fixture: ComponentFixture<ResultEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultEstudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultEstudiante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
