import {
  Component,
  OnInit
} from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  isLoading = false;
  errorMessage = '';

  constructor(
    private studentService: StudentService
  ) {
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.studentService
      .getStudents()
      .subscribe({
        next: (students: Student[]) => {
          this.students = students;
          this.isLoading = false;
        },

        error: (error: HttpErrorResponse) => {
          console.error(error);

          this.errorMessage =
            'Impossible de charger les étudiants.';

          this.isLoading = false;
        }
      });
  }

  addStudent(student: Student): void {
    this.students = [
      ...this.students,
      student
    ];
  }

  deleteStudent(student: Student): void {
    if (student.id === undefined) {
      return;
    }

    const confirmed = window.confirm(
      `Supprimer ${student.firstName} ${student.lastName} ?`
    );

    if (!confirmed) {
      return;
    }

    this.studentService
      .deleteStudent(student.id)
      .subscribe({
        next: () => {
          this.students =
            this.students.filter(
              currentStudent =>
                currentStudent.id !== student.id
            );
        },

        error: (error: HttpErrorResponse) => {
          console.error(error);

          this.errorMessage =
            'Impossible de supprimer cet étudiant.';
        }
      });
  }
}