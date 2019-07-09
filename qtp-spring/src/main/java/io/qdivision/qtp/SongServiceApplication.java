package io.qdivision.qtp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"io.qdivision"})
public class SongServiceApplication {

    public static void main(String[] args){
        SpringApplication.run(SongServiceApplication.class, args);
    }
}
