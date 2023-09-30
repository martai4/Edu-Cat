package edu.thechoice.educat.features.shepherd;

import org.springframework.http.ResponseEntity;

import java.util.Optional;

public interface ShepherdClient {

    Optional<ResponseEntity<String>> analize();
}
