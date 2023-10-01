package edu.thechoice.educat.features.shepherd;

import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Optional;

import static lombok.AccessLevel.PRIVATE;

@Slf4j
@Component
@Primary
@FieldDefaults(makeFinal = true, level = PRIVATE)
public class ShepherdWebClient implements ShepherdClient {
    static String ROOFING_ENDPOINTS = "/image/";
    WebClient webClient;

    String url;

    public ShepherdWebClient(@Value("${shepherd.url}") String url) {
        this.webClient = WebClient.create();
        this.url = url;
    }

    @Override
    public PersonalityAnalysis analize(MultipartFile file) {
        Optional<ResponseEntity<PersonalityAnalysis>> response = webClient.post()
                .uri(url.concat(ROOFING_ENDPOINTS))
                .bodyValue(wrapImage(file))
                .retrieve()
                .toEntity(PersonalityAnalysis.class)
                .blockOptional();

        response.orElseThrow();

        if (response.get().getStatusCode().isError()) {
            log.error("POST {} failed with status {}", ROOFING_ENDPOINTS, response.get().getStatusCode());
        }

        return response.get().getBody();
    }

    private MultiValueMap<String, HttpEntity<?>> wrapImage(MultipartFile file) {
        MultipartBodyBuilder builder = new MultipartBodyBuilder();
        builder.part("image", file.getResource(), MediaType.valueOf(Optional.ofNullable(file.getContentType()).orElseThrow()));
        return builder.build();
    }
}
