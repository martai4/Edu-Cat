package edu.thechoice.educat.features.shepherd;

import org.springframework.web.multipart.MultipartFile;

public class TestClient implements ShepherdClient {
    @Override
    public PersonalityAnalysis analize(MultipartFile file) {
        return PersonalityAnalysis.builder()
                .artistic(0.0)
                .conventional(0.0)
                .enterprising(0.0)
                .investigative(0.0)
                .realistic(0.0)
                .social(0.0)
                .build();
    }
}
