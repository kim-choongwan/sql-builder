package com.template.sample.repository;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.template.sample.model.Message;

@Repository
public class MessageRepository {

	protected final Log logger = LogFactory.getLog(getClass());

//	private SessionFactory sessionFactory;

//	public MessageRepository(SessionFactory sessionFactory) {
//		this.sessionFactory = sessionFactory;
//	}

	public Message saveMessage(Message message) {
//		Session session = this.sessionFactory.getCurrentSession();
//		session.save(message);
		return message;
		}

}
