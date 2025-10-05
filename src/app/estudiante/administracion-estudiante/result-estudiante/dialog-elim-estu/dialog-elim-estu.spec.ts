import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogElimEstu } from './dialog-elim-estu';

describe('DialogElimEstu', () => {
  let component: DialogElimEstu;
  let fixture: ComponentFixture<DialogElimEstu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogElimEstu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogElimEstu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
