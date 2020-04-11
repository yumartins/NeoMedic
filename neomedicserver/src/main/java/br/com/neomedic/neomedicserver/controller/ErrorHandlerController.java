package br.com.neomedic.neomedicserver.controller;

import br.com.neomedic.neomedicserver.exception.ServiceException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorHandlerController {

    private static final Logger logger = LogManager.getLogger(ErrorHandlerController.class);


    @ExceptionHandler(ServiceException.class)
    public ResponseEntity handleServiceException(Exception e) {
        logger.warn("Handle Service Exception: ", e);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

}
