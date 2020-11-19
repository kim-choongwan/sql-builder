package com.template.sample;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class MessageRepository {

	protected final Log logger = LogFactory.getLog(getClass());

	private SessionFactory sessionFactory;

	public MessageRepository(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Message saveMessage(Message message) {
		Session session = this.sessionFactory.openSession();
		session.save(message);
		return message;
	}

}
