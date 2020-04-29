package br.com.neomedic.neomedicserver.configuration;


import br.com.neomedic.neomedicserver.configuration.util.JwtUtil;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Optional;

@Component
public class JwtValidateFilter extends GenericFilterBean {


    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {

        Optional<Authentication> authentication = JwtUtil.getAuth((HttpServletRequest) servletRequest);

        authentication.ifPresent(value -> SecurityContextHolder.getContext().setAuthentication(value));

        filterChain.doFilter(servletRequest, servletResponse);

    }

}
