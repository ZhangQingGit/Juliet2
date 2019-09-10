package com.lingying.soho.Juliet.controller.ex;

/**
 * 上传文件时操作状态异常
 */
public class FileStateException extends FileUploadException {

	private static final long serialVersionUID = -8640003773675166181L;

	public FileStateException() {
		super();
	}

	public FileStateException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public FileStateException(String message, Throwable cause) {
		super(message, cause);
	}

	public FileStateException(String message) {
		super(message);
	}

	public FileStateException(Throwable cause) {
		super(cause);
	}

}
