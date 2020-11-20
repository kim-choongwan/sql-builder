package com.template.sample.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.template.cm.aop.SecurityCheck;
import com.template.sample.model.Message;
import com.template.sample.repository.MessageRepository;

@Service
public class MessageService {

	@Autowired
	MessageRepository repository;

	@SecurityCheck
	@Transactional
//	@Transactional(dontRollbackOn = {UnsupportedOperationException.class })
	public Message save(String text) {
		Message message = repository.saveMessage(new Message(text));
		if("".equals(text))
			error();
		return message;
	}

	private void error() {
		throw new UnsupportedOperationException("this method is not implemented yet");
	}

}
