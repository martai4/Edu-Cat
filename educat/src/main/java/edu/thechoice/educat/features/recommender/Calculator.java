package edu.thechoice.educat.features.recommender;

import edu.thechoice.educat.features.database.DatabaseService;
import edu.thechoice.educat.features.database.domain.EducationChoice;
import edu.thechoice.educat.features.recommender.api.Preferences;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class Calculator {
    @Autowired
    private final DatabaseService dbService;
    public List<EducationChoice> calculatePreferences(final List<EducationChoice> facultyList, final Preferences userPref){
        for (EducationChoice faculty:facultyList){
            int s = userPref.getUserPreferences().get(faculty.getCategory());
//            abs because of randomly generated test data, which generates higher place in ranking than instances in category are
            s+= Math.abs(dbService.categoryCount(faculty.getCategory()) - faculty.getRanking());
            faculty.setScore(s);
        }
        return facultyList;
    }
}
