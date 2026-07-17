package com.training.student_api.exception;

public class StudentNotFoundException extends RuntimeException {

    public StudentNotFoundException(Long id) {
        super("Aucun étudiant trouvé avec l'identifiant : " + id);
    }
}