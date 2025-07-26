package org.example.backend.bucket;

import org.springframework.stereotype.Service;

@Service
public class BucketService {
    private BucketRepository bucketRepository;

    public BucketService(BucketRepository bucketRepository) {
        this.bucketRepository = bucketRepository;
    }

    public Bucket createBucket() {
        return bucketRepository.save(new Bucket("Justin"));
    }

}
