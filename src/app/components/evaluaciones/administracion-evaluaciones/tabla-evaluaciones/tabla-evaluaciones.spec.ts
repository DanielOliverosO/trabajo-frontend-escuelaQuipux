import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEvaluaciones } from './tabla-evaluaciones';

describe('TablaEvaluaciones', () => {
  let component: TablaEvaluaciones;
  let fixture: ComponentFixture<TablaEvaluaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEvaluaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEvaluaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
