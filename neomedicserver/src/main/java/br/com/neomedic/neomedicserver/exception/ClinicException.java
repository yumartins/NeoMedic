package br.com.neomedic.neomedicserver.exception;

public class ClinicException extends ServiceException {

    public ClinicException() {
    }

    public ClinicException(String message) {
        super(message);
    }

    public ClinicException(String message, Throwable cause) {
        super(message, cause);
    }

    public ClinicException(Throwable cause) {
        super(cause);
    }

    public ClinicException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
