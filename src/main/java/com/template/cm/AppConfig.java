package com.template.cm;

import java.util.Arrays;

import javax.sql.DataSource;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

import com.template.cm.filter.AuditingFilter;


@Configuration
@ComponentScan("com.template")
public class AppConfig {

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
		return sessionFactoryBean;
	}
		
}
