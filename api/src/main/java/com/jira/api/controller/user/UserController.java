/**
 * 
 */
package com.jira.api.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.jira.api.service.user.UserService;

/**
 * @author cavalier121
 *
 */


@RestController
@RequestMapping("/user")
public class UserController {

	@Value("${testValue}")
	private String testValue;

	@Autowired
	private UserService userService;

	/**
	 * test
	 * @author cavalier121
	 * 
	 */
	@GetMapping("/")
	public String hello() {
		return "Hello World!!!";
	}

	/**
	 * test
	 * @author cavalier121
	 * 
	 */
	@PostMapping("/getOne")
	public String getOne() throws Exception {
		System.out.println("testValue = " + testValue);

		// Creating the ObjectMapper object
		ObjectMapper mapper = JsonMapper.builder().addModule(new JavaTimeModule()).build();
		// Converting the Object to JSONString
		String jsonString = mapper.writeValueAsString(userService.getDBUser());

		return jsonString;
	}
}
