package edu.thechoice.educat.features.recommender.api;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class Personality {
//         IIP RIASEC Markers. 0-32
    private final Integer realistic;
    private final Integer investigate;
    private final Integer artistic;
    private final Integer social;
    private final Integer enterprising;
    private final Integer conventional;
}
