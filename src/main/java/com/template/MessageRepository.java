package com.template;

import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MessageRepository {

	private final static Log logger = LogFactory.getLog(MessageRepository.class);
	
	public void saveMessage(Message message) {
		logger.info("Saved message : "+message.getText());
	}
	
}
