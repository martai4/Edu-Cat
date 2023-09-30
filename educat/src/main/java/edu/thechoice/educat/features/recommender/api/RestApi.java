package edu.thechoice.educat.features.recommender.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import edu.thechoice.educat.features.database.DatabaseService;
import edu.thechoice.educat.features.database.domain.Category;
import edu.thechoice.educat.features.database.domain.EducationChoice;
import edu.thechoice.educat.features.recommender.Calculator;
import edu.thechoice.educat.features.recommender.Personality;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RestController
public class RestApi {

    private final DatabaseService dbService;
    @NoArgsConstructor
    @Getter
    @Setter
    public static class  Container <Key, Value>{
        private Map<Key, Value> map;
    }

    @PostMapping(value = "/discover", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<EducationChoice> discoverFieldOfStudies(@RequestBody Map<String, Map<String, Integer>> json){
        Map<String, Integer> pref = json.get("userPreferences");
//        Map<String, Integer> per = json.get("personality");
        Map<Category, Integer> preference = new HashMap<>();
        Map<Personality, Integer> personality = new HashMap<>();
        for (String key: pref.keySet()){
            preference.put(Category.valueOf(key), pref.get(key));
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
//        return null;
    }
}
