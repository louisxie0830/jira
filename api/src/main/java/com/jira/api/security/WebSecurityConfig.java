/**
 * 
 */
package com.jira.api.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.jira.api.security.jwt.JWTAuthenticationFilter;
import com.jira.api.security.jwt.LoginFilter;

/**
 * spring security Adapter
 * @author cavalier121
 *
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private CustomAuthenticationProvider customAuthenticationProvider;

	// 設置HTTP請求驗證
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// 因為是JWT，無須csrf驗證
		http.csrf().disable()
				// 對請求進行驗證
				.authorizeRequests()
				// 所有/login的请求放行
				.antMatchers("/login").permitAll()
				// ... 中間配置省略
				.and()
				// 添加過濾器，針對/login的請求，交給LoginFilter處理
				.addFilterBefore(new LoginFilter("/login", authenticationManager()),
						UsernamePasswordAuthenticationFilter.class)
				// 添加過濾器，針對其他請求進行JWT的驗證
				.addFilterBefore(new JWTAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// 使用自定義的驗證
		auth.eraseCredentials(false);
		auth.authenticationProvider(customAuthenticationProvider);
	}
}
