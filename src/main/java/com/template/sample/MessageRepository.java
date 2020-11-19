package com.template.sample;

import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

@Repository
public class MessageRepository {

	protected final Log logger = LogFactory.getLog(getClass());

	private NamedParameterJdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	public Message saveMessage(Message message) {
		
		logger.debug("## ¿˙¿Â");
		
		GeneratedKeyHolder holder = new GeneratedKeyHolder();
		MapSqlParameterSource params = new MapSqlParameterSource();
		params.addValue("text", message.getText());
		params.addValue("createdDate", message.getCreatedDate());
		String insertSQL = "INSERT INTO messages (`id`, `text`, `created_date`) VALUE (null, :text, :createdDate) ";
		try {
			this.jdbcTemplate.update(insertSQL, params, holder);
		} catch (DataAccessException e) {
			logger.error("Failed to save message", e);
			return null;
		}
		return new Message(holder.getKey().intValue(), message.getText(), message.getCreatedDate());
	}

}
