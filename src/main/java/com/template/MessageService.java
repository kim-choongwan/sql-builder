package com.template;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MessageService {

	@Autowired
	private MessageRepository messageRepository;
	
	public MessageService(/*MessageRepository messageRepository*/) {
		//this.messageRepository = messageRepository;
	}

	public void save(String text){
		this.messageRepository.saveMessage(new Message(text));
	}
}
