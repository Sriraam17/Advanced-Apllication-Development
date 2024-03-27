package com.yoga.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface courselistRepository  extends JpaRepository<com.yoga.backend.model.JobList,Long> {
    courselistRepository findBypid(Long id);
}    


// public interface CampaignRepository{

// }