package edu.thechoice.educat.features.database;

import edu.thechoice.educat.features.database.domain.Category;
import edu.thechoice.educat.features.database.domain.EducationChoice;
import edu.thechoice.educat.features.database.entity.EducationChoiceEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DatabaseService {
    private final DatabaseRepository repository;

    @Autowired
    public DatabaseService(DatabaseRepository repository) {
        this.repository = repository;
    }
    public List<EducationChoice> getAll(){
        Iterable<EducationChoiceEntity> entities =  repository.findAll();
        List<EducationChoice> returns = new ArrayList<>();
        for (EducationChoiceEntity e:entities
             ) {
                returns.add(EducationChoice.from(e));
        }
        return returns;
    }
    public int categoryCount(Category cat){
        return repository.countAllByCategory(cat.name());
    }
}
