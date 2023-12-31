package edu.thechoice.educat.features.database;

import edu.thechoice.educat.features.database.domain.Category;
import edu.thechoice.educat.features.database.entity.EducationChoiceEntity;
import org.springframework.data.repository.CrudRepository;

public interface DatabaseRepository extends CrudRepository<EducationChoiceEntity, Long> {
    public int countAllByCategory(String cat);
}
