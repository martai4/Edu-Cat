package edu.thechoice.educat.features.shepherd;

import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Optional;

import static lombok.AccessLevel.PRIVATE;

@Slf4j
@Component
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
    public Optional<ResponseEntity<String>> analize() {
        Optional<ResponseEntity<String>> response = webClient.post()
                .uri(url.concat(ROOFING_ENDPOINTS))
                .bodyValue(wrapImage())
                .retrieve()
                .toEntity(String.class)
                .blockOptional();

        response.orElseThrow();

        if (response.get().getStatusCode().isError()) {
            log.error("POST {} failed with status {}", ROOFING_ENDPOINTS, response.get().getStatusCode());
        }

        return response;
    }

    private MultiValueMap<String, HttpEntity<?>> wrapImage() {
        MultipartBodyBuilder builder = new MultipartBodyBuilder();
        builder.part("image", new FileSystemResource("C:/Users/MATki/Pictures/1b2.png"), MediaType.IMAGE_PNG);
        return builder.build();
    }
}
