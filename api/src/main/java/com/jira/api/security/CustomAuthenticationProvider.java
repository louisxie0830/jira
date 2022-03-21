/**
 * 
 */
package com.jira.api.security;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

/**
 * 登入自訂驗證
 * @author cavalier121
 *
 */
@Service
public class CustomAuthenticationProvider implements AuthenticationProvider {
	
	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		// 獲得使用者帳號及密碼
		System.out.println(authentication.getCredentials());
		String account = authentication.getName();
		
		Object password = authentication.getCredentials();
		System.out.println("account = "+account);
		System.out.println("password = "+password);
		
		// 帳號密碼驗證邏輯
		if (account.equals("admin")&&password.toString().equals("123456")) {
			// 生成Authentication令牌
			Authentication auth = new UsernamePasswordAuthenticationToken(account,password);
			return auth;
		} else {
			throw new BadCredentialsException("Password error");
		}
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}
}
