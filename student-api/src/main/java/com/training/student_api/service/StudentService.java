package com.training.student_api.service;

import com.training.student_api.dto.StudentRequest;
import com.training.student_api.model.Student;
import com.training.student_api.exception.StudentNotFoundException;
import com.training.student_api.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student createStudent(StudentRequest request) {

   

      Student student = new Student();

    student.setFirstName(request.getFirstName());
    student.setLastName(request.getLastName());
    student.setEmail(request.getEmail());
    student.setClassroom(request.getClassroom());
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException(id));
    }

    public Student updateStudent(Long id, StudentRequest request) {

        Student existingStudent = getStudentById(id);

        boolean emailAlreadyUsed =
                studentRepository.existsByEmailAndIdNot(request.getEmail(), id);

        if (emailAlreadyUsed) {
            throw new IllegalArgumentException(
                    "Cette adresse email est déjà utilisée"
            );
        }

        existingStudent.setFirstName(request.getFirstName());
        existingStudent.setLastName(request.getLastName());
        existingStudent.setEmail(request.getEmail());
        existingStudent.setClassroom(request.getClassroom());

        return studentRepository.save(existingStudent);
    }

    public void deleteStudent(Long id) {

        Student student = getStudentById(id);

        studentRepository.delete(student);
    }
}