package edu.thechoice.educat.features.recommender;

import edu.thechoice.educat.features.database.DatabaseService;
import edu.thechoice.educat.features.database.domain.Category;
import edu.thechoice.educat.features.database.domain.EducationChoice;
import edu.thechoice.educat.features.shepherd.ShepherdClient;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@Slf4j
@AllArgsConstructor
public class Calculator {
    @Autowired
    private final DatabaseService dbService;

    public List<EducationChoice> calculatePreferences(final List<EducationChoice> facultyList, final Map<Category, Integer> userPref, ShepherdClient.PersonalityAnalysis personality) {
        for (EducationChoice faculty : facultyList) {
            double score = userPref.get(faculty.getCategory()) + 1.0;
//            abs because of randomly generated test data, which generates higher place in ranking than instances in category are
            score += 0.1 * Math.abs(dbService.categoryCount(faculty.getCategory()) - faculty.getRanking());

            double impact = personalityImpact(faculty.getCategory(), personality);
            if (impact != 0)
                score *= impact;

            faculty.setScore(score);
        }

        return facultyList;
    }

    private double personalityImpact(Category category, ShepherdClient.PersonalityAnalysis personality) {
        double impact;

        switch (category) {
            case HUMANIST -> impact = 0.1 * personality.artistic() + 0.2 * personality.investigative();
            case THEOLOGICAL -> impact = 0.3 * personality.investigative();
            case ECONOMICAL -> impact = 0.1 * personality.social() + 0.4 * personality.enterprising();
            case MEDICAL -> impact = 0.1 * personality.conventional() + 0.2 * personality.investigative();
            case NATURE -> impact = 0.2 * personality.realistic();
            case ENVIRONMENTAL -> impact = 0.2 * personality.investigative() + 0.1 * personality.enterprising();
            case SOCIAL -> impact = 0.3 * personality.social();
            case TECHNICAL, SCIENCE -> impact = 0.3 * personality.conventional() + 0.1 * personality.investigative();
            default -> impact = 0.0;
        }

        return impact;
    }
}
