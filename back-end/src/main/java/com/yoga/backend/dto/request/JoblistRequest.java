package com.yoga.backend.dto.request;
import com.yoga.backend.enumerated.Role;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class JoblistRequest {
    
    private Long pid;
	private String JobTitle;
	private String Company_name;
	private String Location;
	private String Qualification;
	
    
}