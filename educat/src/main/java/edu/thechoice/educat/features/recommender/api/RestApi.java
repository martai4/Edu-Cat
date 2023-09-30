package edu.thechoice.educat.features.recommender.api;

import edu.thechoice.educat.features.database.DatabaseService;
import edu.thechoice.educat.features.database.domain.EducationChoice;
import edu.thechoice.educat.features.recommender.Calculator;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://127.0.0.1:3000"})
public class RestApi {

    private final DatabaseService dbService;
    @PostMapping(value = "/discover", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<EducationChoice> discoverFieldOfStudies(@RequestBody Preferences userPrefs) {
        userPrefs.fillEmpty();
        List<EducationChoice> faculties = dbService.getAll();
        Calculator calc = new Calculator(dbService);
        calc.calculatePreferences(faculties, userPrefs);
        return faculties;
    }
}
