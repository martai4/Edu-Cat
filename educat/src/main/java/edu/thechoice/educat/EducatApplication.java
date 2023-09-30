package edu.thechoice.educat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@SpringBootApplication
public class EducatApplication {

	public static void main(String[] args) {
		SpringApplication.run(EducatApplication.class, args);
	}

}
