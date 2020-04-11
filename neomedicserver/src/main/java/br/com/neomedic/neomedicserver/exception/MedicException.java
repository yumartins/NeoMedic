package br.com.neomedic.neomedicserver.exception;

public class MedicException extends ServiceException {

    public MedicException() {
    }

    public MedicException(String message) {
        super(message);
    }

    public MedicException(String message, Throwable cause) {
        super(message, cause);
    }

    public MedicException(Throwable cause) {
        super(cause);
    }

    public MedicException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}

