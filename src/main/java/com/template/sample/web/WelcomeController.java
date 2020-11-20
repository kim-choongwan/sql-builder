package com.template.sample.web;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WelcomeController {

	protected final Log logger = LogFactory.getLog(getClass());
	
	public WelcomeController() {
	}

	@GetMapping("/welcome")
	public String welcome(Model model) {
		model.addAttribute("message", "Hello, Welcome to Spring Boot!");
		return "welcome";
	}

}