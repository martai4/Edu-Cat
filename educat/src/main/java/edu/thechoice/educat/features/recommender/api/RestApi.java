package edu.thechoice.educat.features.recommender.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import edu.thechoice.educat.features.database.DatabaseService;
import edu.thechoice.educat.features.database.domain.Category;
import edu.thechoice.educat.features.database.domain.EducationChoice;
import edu.thechoice.educat.features.recommender.Calculator;
import edu.thechoice.educat.features.shepherd.ShepherdClient;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://127.0.0.1:3000"})
@Slf4j
public class RestApi {

    private final DatabaseService dbService;
    private final ShepherdClient client;
    @NoArgsConstructor
    @Data
    public static class  Container <Key, Value>{
        private Map<Key, Value> map;
    }

    @PostMapping(value = "/discover", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<EducationChoice> discoverFieldOfStudies(
            @RequestParam("json") String preferenceString,
            @RequestParam("image") MultipartFile image
            ) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        Map<String, Map<Category, Integer>> pref = mapper.readValue(preferenceString, Map.class);
        Map<Category, Integer> preference = pref.get("userPreferences");

        for (Category cat: Category.values()){
            preference.computeIfAbsent(cat, category -> {return 1;});
        }
        ShepherdClient.PersonalityAnalysis personality = client.analize(image);


        List<EducationChoice> faculties = dbService.getAll();
        Calculator calc = new Calculator(dbService);
        calc.calculatePreferences(faculties, preference, personality);
        return faculties;
//        return null;
    }
}
