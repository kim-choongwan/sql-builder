package com.template.cm;

import java.util.Arrays;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.template.cm.filter.AuditingFilter;


@Configuration
@ComponentScan("com.template")
public class AppConfig {

	@Bean
	public FilterRegistrationBean<AuditingFilter> auditFilterRegistrationBean(){
		
		FilterRegistrationBean<AuditingFilter> registrationBean = new FilterRegistrationBean<AuditingFilter>();
		
		AuditingFilter filter = new AuditingFilter();
		registrationBean.setFilter(filter);
		registrationBean.setOrder(Integer.MAX_VALUE);
		registrationBean.setUrlPatterns(Arrays.asList("/*"));
		
		return registrationBean; 
		
	} 
}
