package br.com.neomedic.neomedicserver.configuration.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Collections;
import java.util.Date;
import java.util.Optional;

@Component
public class JwtUtil {

    private static final Logger logger = LogManager.getLogger(JwtUtil.class);

    private long expirationTime;
    public static long EXPIRATION_TIME;

    private String secret;
    public static String SECRET;

    private String tokenPrefix;
    public static String TOKEN_PREFIX;

    private String headerKey;
    public static String HEADER_KEY;

    @Value("${jwt.expiration.time:860000000}")
    public void setExpirationTime(long expirationTime) {
        JwtUtil.EXPIRATION_TIME = expirationTime;
    }

    @Value("${jwt.secret.key}")
    public void setSecret(String secret) {
        JwtUtil.SECRET = secret;
    }

    @Value("${jwt.token.prefix:Bearer}")
    public void setTokenPrefix(String tokenPrefix) {
        JwtUtil.TOKEN_PREFIX = tokenPrefix;
    }

    @Value("${jwt.auth.header.key:Authorization}")
    public void setHeaderKey(String headerKey) {
        JwtUtil.HEADER_KEY = headerKey;
    }

    public static void doAuth(HttpServletResponse response, String username) {
        String token = Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();

        response.addHeader(HEADER_KEY, TOKEN_PREFIX + " " + token);
    }

    public static Optional<Authentication> getAuth(HttpServletRequest request) {
        try {
            String token = request.getHeader(HEADER_KEY);

            if (token != null) {
                String user = Jwts.parser()
                        .setSigningKey(SECRET)
                        .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                        .getBody()
                        .getSubject();

                return Optional.of(new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList()));
            }
        } catch (Exception e) {
            logger.warn("Fail on authentication!", e);
        }
        return Optional.empty();
    }
}
