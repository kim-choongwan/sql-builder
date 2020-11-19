package com.template.sample;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/sample")
public class MessageController {

	protected final Log logger = LogFactory.getLog(getClass());
	
	private MessageService messageService;

	public MessageController(MessageService messageService) {
		this.messageService = messageService;
	}

	@GetMapping("/welcome")
	public String welcome(Model model) {
		model.addAttribute("message", "Hello, Welcome to Spring Boot!");
		return "welcome";
	}

	@PostMapping("/messages.json")
	@ResponseBody
	public ResponseEntity<Message> saveMessage(@RequestBody MessageData data) {
		Message saved = messageService.save(data.getText());
		if (saved == null) {
			return ResponseEntity.status(500).build();
		}
		return ResponseEntity.ok(saved);
	}
}