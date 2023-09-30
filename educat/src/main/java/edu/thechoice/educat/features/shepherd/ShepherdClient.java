package edu.thechoice.educat.features.shepherd;

import lombok.Builder;
import org.springframework.web.multipart.MultipartFile;

public interface ShepherdClient {

    PersonalityAnalysis analize(MultipartFile file);

    @Builder
    record PersonalityAnalysis (
            double artistic,
            double conventional, // konkretny
            double enterprising, // przedsiębiorczy
            double investigative, // dociekliwy
            double realistic, // realista
            double social
    ) {}
}
