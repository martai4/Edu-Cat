package edu.thechoice.educat.features.database.domain;

import edu.thechoice.educat.features.database.entity.EducationChoiceEntity;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EducationChoice {
    private String collage;
    private String city;
    private Integer ranking;
    private Category category;
    private String fieldOfStudy;
    private int score = 0;

    public static EducationChoice from(EducationChoiceEntity entity) {
        return EducationChoice.builder()
                .collage(entity.getCollage())
                .city(entity.getCity())
                .ranking(entity.getRanking())
                .category(Category.valueOf(entity.getCategory())) // todo check if null
                .fieldOfStudy(entity.getFieldOfStudy())
                .build();
    }
}
