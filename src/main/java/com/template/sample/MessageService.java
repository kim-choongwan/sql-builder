package com.template.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.template.cm.aop.SecurityCheck;

@Service
public class MessageService {

	@Autowired
	MessageRepository repository;

	@SecurityCheck
	public Message save(String text) {
		return repository.saveMessage(new Message(text));
	}

}
