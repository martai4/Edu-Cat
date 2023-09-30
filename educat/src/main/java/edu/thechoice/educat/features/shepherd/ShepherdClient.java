package edu.thechoice.educat.features.shepherd;

import org.springframework.web.multipart.MultipartFile;

public interface ShepherdClient {

    PersonalityAnalysis analize(MultipartFile file);

    public record PersonalityAnalysis (
            float artistic,
            float conventional,
            float enterprising,
            float investigative,
            float realistic,
            float social
    ) {}
}
