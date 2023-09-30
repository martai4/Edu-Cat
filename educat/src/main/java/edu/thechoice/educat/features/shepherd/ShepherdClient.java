package edu.thechoice.educat.features.shepherd;

import org.springframework.web.multipart.MultipartFile;

public interface ShepherdClient {

    PersonalityAnalysis analize(MultipartFile file);

    record PersonalityAnalysis (
            float artistic,
            float conventional, // konkretny
            float enterprising, // przedsiębiorczy
            float investigative, // dociekliwy
            float realistic, // realista
            float social
    ) {}
}
