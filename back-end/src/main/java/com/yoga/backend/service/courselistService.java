package com.yoga.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.yoga.backend.model.*;
import com.yoga.backend.repository.courselistRepository;
import com.yoga.backend.dto.request.JoblistRequest;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class courselistService {
    private final courselistRepository repository;

    public boolean registerCourse(JoblistRequest request) {
        // Creating a new course object from the request
        var course = JobList.builder()
                .pid(request.getPid())
                .JobTitle(request.getJobTitle())
                .Company_name(request.getCompany_name())
                .Location(request.getLocation())
                .Qualification(request.getQualification())
                .build();
        
        // Saving the course to the repository
        repository.save(course);

        return true;
    }

    public List<JobList> getAllCourses() {
        // Retrieve all courses from the repository
        return repository.findAll();
    }

    public boolean updateCourse(JoblistRequest request, Long pid) {
        Optional<JobList> optionalCourse = repository.findById(pid);

        if (optionalCourse.isPresent()) {
            JobList course = optionalCourse.get();
            // Update the fields of the course with the new values from the request
            course.setJobTitle(request.getJobTitle());
            course.setCompany_name(request.getCompany_name());
            course.setLocation(request.getLocation());
            course.setQualification(request.getQualification());

            // Save the updated course to the repository
            repository.save(course);

            return true;
        } else {
            // Throw an exception if the course with the specified ID is not found
            throw new EntityNotFoundException("Course with id " + pid + " not found");
        }
    }

    public boolean deleteCourse(Long pid) {
        // Delete the course with the specified ID from the repository
        repository.deleteById(pid);
        return true;
    }
}
