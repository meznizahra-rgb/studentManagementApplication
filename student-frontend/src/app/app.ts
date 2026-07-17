import {
  Component,
  ViewChild
} from '@angular/core';

import { Student } from './models/student';

import {
  StudentFormComponent
} from './components/student-form/student-form';

import {
  StudentListComponent
} from './components/student-list/student-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StudentFormComponent,
    StudentListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  @ViewChild(StudentListComponent)
  studentListComponent?: StudentListComponent;

  onStudentCreated(student: Student): void {
    this.studentListComponent?.addStudent(student);
  }
}