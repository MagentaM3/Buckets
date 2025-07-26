package org.example.backend.config;

import org.example.backend.bucket.Bucket;
import org.example.backend.bucket.BucketRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final BucketRepository bucketRepository;

    public DataLoader(BucketRepository bucketRepository) {
        this.bucketRepository = bucketRepository;
    }

    @Override
    public void run(String... args) {
        // Load initial data into the database
        bucketRepository.save(new Bucket("Felix"));
        bucketRepository.save(new Bucket("Justin"));
        bucketRepository.save(new Bucket("Ivan"));
        bucketRepository.save(new Bucket("Elizabeth"));
        bucketRepository.save(new Bucket("Parker"));
    }
}