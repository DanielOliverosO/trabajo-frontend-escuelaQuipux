import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGrupos } from './lista-grupos';

describe('ListaGrupos', () => {
  let component: ListaGrupos;
  let fixture: ComponentFixture<ListaGrupos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaGrupos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaGrupos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
