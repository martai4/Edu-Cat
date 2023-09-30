package edu.thechoice.educat.features.recommender.api;

import edu.thechoice.educat.features.recommender.Personality;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Map;

@NoArgsConstructor
@Getter
public class PersonalityTransfer {
    private Map<Personality, Integer> userPersonality;

    public void fillEmpty(){
        for (Personality personality : Personality.values()){
            userPersonality.computeIfAbsent(personality, per -> {return 0;});
        }

    }
}
