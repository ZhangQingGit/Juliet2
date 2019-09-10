package com.lingying.soho.Juliet.controller.ex;

/**
 * 文件大小异常，通常为上传的文件的大小超出了限制
 */
public class FileSizeException extends FileUploadException {

	private static final long serialVersionUID = 5302269116229851354L;

	public FileSizeException() {
		super();
	}

	public FileSizeException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public FileSizeException(String message, Throwable cause) {
		super(message, cause);
	}

	public FileSizeException(String message) {
		super(message);
	}

	public FileSizeException(Throwable cause) {
		super(cause);
	}

}
