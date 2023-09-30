package edu.thechoice.educat.features.database.entity;

import edu.thechoice.educat.features.database.domain.Category;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

@Entity
@Getter
public class EducationChoiceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String city;
    private Integer ranking;
    private Category category;
    private String fieldOfStudy;
}
