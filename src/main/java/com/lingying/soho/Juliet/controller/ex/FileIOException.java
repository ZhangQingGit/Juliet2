package com.lingying.soho.Juliet.controller.ex;

/**
 * 上传文件时读写异常
 */
public class FileIOException extends FileUploadException {

	private static final long serialVersionUID = -5303896993031321082L;

	public FileIOException() {
		super();
	}

	public FileIOException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public FileIOException(String message, Throwable cause) {
		super(message, cause);
	}

	public FileIOException(String message) {
		super(message);
	}

	public FileIOException(Throwable cause) {
		super(cause);
	}

}
