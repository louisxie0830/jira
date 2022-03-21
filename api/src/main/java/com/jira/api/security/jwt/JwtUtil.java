/**
 * 
 */
package com.jira.api.security.jwt;

import java.util.Base64;
import java.util.Date;
import java.util.List;

import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

/**
 * @author cavalier121
 *
 */
@Component
public class JwtUtil {
    public static String KEY = "JWTKEY";
	
	static final long EXPIRATIONTIME = 1000*60*30;     // 半小時
	protected static final String TOKEN_PREFIX = "Bearer ";        // Token前缀
	protected static final String HEADER_STRING = "Authorization";// 存放Token的Header Key
    static final String encodeKey = Base64.getEncoder().encodeToString(KEY.getBytes());	//密鑰
	
    // JWT產生方法
    public static void addAuthentication(HttpServletResponse response, Authentication user) throws Exception {
    
    	// 生成JWT
    	String jws = Jwts.builder()
    			.setSubject(user.getName())
    			.setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
    			.signWith(SignatureAlgorithm.HS256,encodeKey).compact();
    	System.out.println("jws = "+jws);
        response.setContentType("application/json");
		response.setStatus(HttpServletResponse.SC_OK);
		response.addHeader(HEADER_STRING, TOKEN_PREFIX+" "+jws);
    }

  // JWT驗證方法
    public static Authentication getAuthentication(HttpServletRequest request) throws AuthException {
    	
        // 從request的header拿回token
        String token = request.getHeader(HEADER_STRING);
        System.out.println("token ="+token);
        if (token != null) {
            // 解析 Token
        	try {
        		Claims claims = Jwts.parser()
                        // 驗證
                        .setSigningKey(encodeKey)
                        // 去掉 Bearer
                        .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                        .getBody();

                // 拿用户名
                String user = claims.getSubject();

                // 得到權限
                List<GrantedAuthority> authorities =  
                		AuthorityUtils.commaSeparatedStringToAuthorityList((String) claims.get("authorize"));
                // 返回Token
                return user != null ?
						new UsernamePasswordAuthenticationToken(user, null, authorities) :
                        null;
        	} catch (SignatureException e) {
                throw new AuthException("Invalid JWT signature.");
            }
            catch (MalformedJwtException e) {
                throw new AuthException("Invalid JWT token.");
            }
            catch (ExpiredJwtException e) {
                throw new AuthException("Expired JWT token");
            }
            catch (UnsupportedJwtException e) {
                throw new AuthException("Unsupported JWT token");
            }
            catch (IllegalArgumentException e) {
                throw new AuthException("JWT token compact of handler are invalid");
            }
            
        }
        return null;
    }  
}
