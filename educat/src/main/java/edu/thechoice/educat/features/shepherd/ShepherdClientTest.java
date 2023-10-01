package edu.thechoice.educat.features.shepherd;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
@Qualifier("test")
public class ShepherdClientTest implements ShepherdClient {
    @Override
    public PersonalityAnalysis analize(MultipartFile file) {
        return new PersonalityAnalysis(0.1f, 0.1f, 0.1f, 0.1f, 0.1f, 0.1f
        );
    }
}
