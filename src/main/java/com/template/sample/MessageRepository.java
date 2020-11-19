package com.template.sample;

import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MessageRepository {

	protected final Log logger = LogFactory.getLog(getClass());
	
	@Autowired
	private DataSource dataSource;
	
	public Message saveMessage(Message message) {

		logger.info("## 저장되어라.");
		return message;
	}
	
	
}
