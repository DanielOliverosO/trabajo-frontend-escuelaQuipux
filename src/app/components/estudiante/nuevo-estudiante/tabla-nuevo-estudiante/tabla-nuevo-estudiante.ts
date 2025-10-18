import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { combineLatest, map, startWith } from 'rxjs';

@Component({
  selector: 'app-tabla-nuevo-estudiante',
  templateUrl: './tabla-nuevo-estudiante.html',
  styleUrls: ['./tabla-nuevo-estudiante.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class TablaNuevoEstudiante implements OnInit {

  @Input() studentCodigo: string | null = null;
  coursesForm: FormGroup;
  savedCourses: any[] = [];
  private storageKey = 'pendingInscripciones';

  constructor(private fb: FormBuilder) {
    this.coursesForm = this.fb.group({
      courses: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadSavedCourses();
    // Ensure there's always a single editable row
    this.clearCourses();
    this.addCourse();
    // listen for external clear requests (e.g. from parent Cancel button)
    window.addEventListener('clearPendingInscripciones', this.handleClearEvent);
  }

  handleClearEvent = () => {
    this.clearSavedCourses();
  }

  clearSavedCourses() {
    this.savedCourses = [];
    try { localStorage.removeItem(this.storageKey); } catch (e) {}
  }

  private loadSavedCourses() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      this.savedCourses = raw ? JSON.parse(raw) : [];
    } catch (e) {
      this.savedCourses = [];
    }
  }

  private persistSavedCourses() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.savedCourses));
    } catch (e) {
      // ignore storage errors
    }
  }

  private clearCourses() {
    while (this.courses.length) {
      this.courses.removeAt(0);
    }
  }

  get courses(): FormArray {
    return this.coursesForm.get('courses') as FormArray;
  }

  newCourse(): FormGroup {
    return this.fb.group({
      // codigoCurso se genera automáticamente a partir de fecha+grado+grupo y no debe ser editable
      codigoCurso: [{ value: '', disabled: true }, Validators.required],
      // sin valor por defecto; validar solo números
      fecha: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      grado: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      grupo: ['A', Validators.required],
      estado: ['en curso', Validators.required],
      notaPromedio: [null, Validators.required]
    });
  }

  addCourse() {
    const courseGroup = this.newCourse();
    // añadimos la fila editable
    this.courses.push(courseGroup);

    // auto-generate codigoCurso based on fecha + grado + grupo (e.g. 202010A)
    const fecha$ = courseGroup.get('fecha')!.valueChanges.pipe(startWith(courseGroup.get('fecha')!.value));
    const grado$ = courseGroup.get('grado')!.valueChanges.pipe(startWith(courseGroup.get('grado')!.value));
    const grupo$ = courseGroup.get('grupo')!.valueChanges.pipe(startWith(courseGroup.get('grupo')!.value));
    // per-group marker to remember last auto-generated code so we don't overwrite user edits
    (courseGroup as any).__lastGenerated = null;

    combineLatest([fecha$, grado$, grupo$]).pipe(
      map(([fecha, grado, grupo]) => `${fecha || ''}${grado || ''}${grupo || ''}`)
    ).subscribe(newCode => {
      const codigoControl = courseGroup.get('codigoCurso')!;
      const current = codigoControl.value;
      const prevGenerated = (courseGroup as any).__lastGenerated || null;

      // set code only if empty or equals previous auto-generated value (so user edits stick)
      if (!current || current === prevGenerated) {
        codigoControl.setValue(newCode, { emitEvent: false });
        (courseGroup as any).__lastGenerated = newCode;
      }
    });
  }

  /**
   * Save the current editable course (index 0) into savedCourses and persist.
   * Then reset the editable row so the user can add more.
   */
  saveCurrentCourse() {
    if (this.courses.length === 0) return;
    const group = this.courses.at(0) as FormGroup;
    group.markAllAsTouched();
    if (group.invalid) return;

    const raw = group.getRawValue();
    // Build the shape expected by backend (keep id.codigoCurso like before)
    const entry = { id: { codigoCurso: raw.codigoCurso }, ...raw };

    this.savedCourses.push(entry);
    this.persistSavedCourses();

    // Reset the existing FormGroup instead of removing it to keep subscriptions active
    group.reset({
      codigoCurso: '',
      fecha: null,
      grado: null,
      grupo: '',
      estado: 'en curso',
      notaPromedio: null
    });

    // Ensure codigoCurso stays disabled (it's a disabled control)
    const codigoControl = group.get('codigoCurso');
    if (codigoControl) {
      // temporarily enable to clear value reliably, then disable again
      codigoControl.enable({ emitEvent: false });
      codigoControl.setValue('', { emitEvent: false });
      codigoControl.disable({ emitEvent: false });
    }

    // clear last generated marker so next edits generate a fresh code
    (group as any).__lastGenerated = '';

    // mark as pristine/untouched so UI validations don't immediately show
    group.markAsPristine();
    group.markAsUntouched();
  }

  autoFillCurrentCourse() {
    if (this.courses.length === 0) return;
    const group = this.courses.at(0) as FormGroup;
    const year = new Date().getFullYear();
    group.patchValue({
      fecha: year,
      grado: '11',
      grupo: 'B',
      estado: 'en curso',
      notaPromedio: 4.0
    });
  }

  

  getCoursesData() {
    // Return saved courses plus any currently filled editable row (if valid)
    const result = [...this.savedCourses];
    if (this.courses.length > 0) {
      const current = (this.courses.at(0) as FormGroup).getRawValue();
      // only include current if it has meaningful data (notaPromedio not null or others)
      const hasData = Object.values(current).some(v => v !== null && v !== '' && v !== undefined);
      if (hasData) {
        result.push({ id: { codigoCurso: current.codigoCurso }, ...current });
      }
    }
    return result;
  }
}
