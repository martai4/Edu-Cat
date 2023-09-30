package edu.thechoice.educat.features.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DatabaseService {
    private final DatabaseRepository repository;

    @Autowired
    public DatabaseService(DatabaseRepository repository) {
        this.repository = repository;
    }
}
