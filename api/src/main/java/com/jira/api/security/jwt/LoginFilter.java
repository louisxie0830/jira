/**
 * 
 */
package com.jira.api.security.jwt;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * spring security 登入驗證filter
 * @author cavalier121
 * @Date 2022-03-20
 *
 */
public class LoginFilter extends AbstractAuthenticationProcessingFilter {

	/**
	 * spring security 登入驗證filter
	 * @author cavalier121<br>
	 * @Date 2022-03-20
	 *
	 */
	public LoginFilter(String url, AuthenticationManager authManager) {
		super(new AntPathRequestMatcher(url));
		setAuthenticationManager(authManager);
	}

	@SuppressWarnings("unchecked")
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException, IOException, ServletException {
		ObjectMapper mapper = new ObjectMapper();
		InputStream stream = request.getInputStream();
		Map<String, String> body = mapper.readValue(stream, Map.class);

		return getAuthenticationManager()
				.authenticate(new UsernamePasswordAuthenticationToken(body.get("username"), body.get("password")));
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		// 登入成功
		System.out.println("successful  Authentication ---- ");
		try {
			JwtUtil.addAuthentication(response, authResult);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException failed) throws IOException, ServletException {
		// 登入失敗
		System.out.println("unsuccessful  Authentication ---- ");
		// TODO Auto-generated method stub
		response.setContentType("application/json");
		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

	}

}
