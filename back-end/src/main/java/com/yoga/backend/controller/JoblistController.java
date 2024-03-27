package com.yoga.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.yoga.backend.model.JobList;
import com.yoga.backend.service.courselistService;
import com.yoga.backend.dto.request.JoblistRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/job") // Changed the request mapping to match the resource being dealt with
@RequiredArgsConstructor
@CrossOrigin(origins="*",allowedHeaders = "*")
public class JoblistController {

    private final courselistService courseService;

    @PostMapping("/create")
    public ResponseEntity<String> registerCourse(@RequestBody JoblistRequest request) {
        boolean isSaved = courseService.registerCourse(request);
        return isSaved ? ResponseEntity.status(201).body("Course created successfully!")
                : ResponseEntity.badRequest().build();
    }

    @GetMapping("/get")
    public ResponseEntity<List<JobList>> getAllCourses() {
        List<JobList> courseList = courseService.getAllCourses();
        return !courseList.isEmpty() ? ResponseEntity.status(200).body(courseList)
                : ResponseEntity.noContent().build();
    }

    @PutMapping("/edit/{pid}")
    public ResponseEntity<String> updateCourse(@RequestBody JoblistRequest request, @PathVariable("pid") Long pid) {
        boolean isUpdate = courseService.updateCourse(request, pid);
        return isUpdate
                ? ResponseEntity.status(200).body("Course updated successfully!")
                : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{pid}")
    public ResponseEntity<String> deleteCourse(@PathVariable("pid") Long pid) {
        boolean isDelete = courseService.deleteCourse(pid);
        return isDelete ? ResponseEntity.status(200).body("Course deleted successfully!")
                : ResponseEntity.notFound().build();
    }
}
