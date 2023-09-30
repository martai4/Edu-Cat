package edu.thechoice.educat.features.database.domain;

import edu.thechoice.educat.features.database.entity.EducationChoiceEntity;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EducationChoice {
    private String city;
    private Integer ranking;

    public static EducationChoice from(EducationChoiceEntity entity) {
        return EducationChoice.builder()
                .city(entity.getCity())
                .ranking(entity.getRanking())
                .build();
    }
}
