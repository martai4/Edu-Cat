package edu.thechoice.educat.features.recommender;

import edu.thechoice.educat.features.database.domain.EducationChoice;
import edu.thechoice.educat.features.recommender.api.Preferences;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class Calculator {
    public static List<EducationChoice> calculatePreferences(final List<EducationChoice> facultyList, final Preferences userPref){
        for (EducationChoice faculty:facultyList){
            faculty.setScore(userPref.getUserPreferences().get(faculty.getCategory()));
        }
        return facultyList;
    }
}
