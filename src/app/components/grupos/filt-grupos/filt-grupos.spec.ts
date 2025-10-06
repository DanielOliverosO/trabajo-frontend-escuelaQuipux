import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltGrupos } from './filt-grupos';

describe('FiltGrupos', () => {
  let component: FiltGrupos;
  let fixture: ComponentFixture<FiltGrupos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltGrupos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltGrupos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
