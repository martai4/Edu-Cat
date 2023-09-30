package edu.thechoice.educat.features.recommender.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import edu.thechoice.educat.features.database.domain.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.util.Map;

@Slf4j
@Getter
public class Preferences {
//    //    Study categories, 0-5
//    private final Integer humanistic;
//    private final Integer theology;
//    private final Integer economic;
//    private final Integer medical;
//    private final Integer nature;
//    //   rolnicze,lesne, weterynaryjne
//    private final Integer environment;
//    //   spoleczne
//    private final Integer socialStudies;
//    private final Integer technical;
//    private final Integer science;
    private Map<Category, Integer> userPreferences;
//    private final ObjectMapper mapper = new ObjectMapper();
//    public Map deserializeJsonToMap(String json) throws IOException {
//        return mapper.readValue(json, Map.class);
//    }
}
