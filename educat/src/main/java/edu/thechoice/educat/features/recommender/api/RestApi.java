package edu.thechoice.educat.features.recommender.api;

import edu.thechoice.educat.features.database.DatabaseService;
import edu.thechoice.educat.features.database.domain.Category;
import edu.thechoice.educat.features.database.domain.EducationChoice;
import edu.thechoice.educat.features.recommender.Calculator;
import edu.thechoice.educat.features.shepherd.ShepherdClient;
import edu.thechoice.educat.features.shepherd.TestClient;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://127.0.0.1:3000"})
public class RestApi {

    private final DatabaseService dbService;
    private final ShepherdClient client = new TestClient();
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
            preference.putIfAbsent(cat, 1);
        }
//        for(String key: per.keySet()){
//            personality.put(Personality.valueOf(key), per.get(key));
//        }
//        per.clear();
        pref.clear();


        List<EducationChoice> faculties = dbService.getAll();
        Calculator calc = new Calculator(dbService);
        calc.calculatePreferences(faculties, preference, personality);
        return faculties;
    }
}
