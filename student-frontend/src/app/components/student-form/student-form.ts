import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})
export class StudentFormComponent {

  @Output()
  studentCreated = new EventEmitter<Student>();

  studentForm: FormGroup;

  successMessage = '';
  errorMessage = '';
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {
    this.studentForm = this.formBuilder.group({
      firstName: [
        '',
        Validators.required
      ],
      lastName: [
        '',
        Validators.required
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      classroom: ['']
    });
  }

  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const student =
      this.studentForm.getRawValue() as Student;

    this.studentService
      .createStudent(student)
      .subscribe({
        next: (createdStudent: Student) => {
          this.successMessage =
            'Étudiant créé avec succès.';

          this.studentCreated.emit(createdStudent);
          this.studentForm.reset();
          this.isSubmitting = false;
        },

        error: (error: HttpErrorResponse) => {
          console.error(error);

          this.errorMessage =
            error.error?.message ??
            'Erreur lors de la création.';

          this.isSubmitting = false;
        }
      });
  }

  isInvalid(fieldName: string): boolean {
    const field =
      this.studentForm.get(fieldName);

    return !!(
      field &&
      field.invalid &&
      field.touched
    );
  }
}