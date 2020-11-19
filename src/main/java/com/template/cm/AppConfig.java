package com.template.cm;

import java.util.Arrays;

import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.template.cm.filter.AuditingFilter;


@Configuration
@EnableTransactionManagement
@ComponentScan("com.template")
public class AppConfig {

	protected final Log logger = LogFactory.getLog(getClass());

	private DataSource dataSource;
	
	public AppConfig(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	@Bean
	public FilterRegistrationBean<AuditingFilter> auditFilterRegistrationBean(){
		
		FilterRegistrationBean<AuditingFilter> registrationBean = new FilterRegistrationBean<AuditingFilter>();
		
		AuditingFilter filter = new AuditingFilter();
		registrationBean.setFilter(filter);
		registrationBean.setOrder(Integer.MAX_VALUE);
		registrationBean.setUrlPatterns(Arrays.asList("/*"));
		
		return registrationBean; 
		
	}
	
	@Bean
	public LocalSessionFactoryBean sessionFactory() {
		LocalSessionFactoryBean sessionFactoryBean = new LocalSessionFactoryBean();
		sessionFactoryBean.setDataSource(dataSource);
		sessionFactoryBean.setPackagesToScan("com.template");
		logger.debug("## sessionFactory : "+sessionFactoryBean);
		return sessionFactoryBean;
	}
		
	@Bean
	public HibernateTransactionManager transactionManager() {
		HibernateTransactionManager transactionManager = new HibernateTransactionManager();
		transactionManager.setSessionFactory(sessionFactory().getObject());
		logger.debug("## transactionManager : "+transactionManager);
		return transactionManager; 
	} 

}
