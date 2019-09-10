package com.lingying.soho.Juliet.controller.ex;

/**
 * 文件类型异常，通常是尝试上传不支持的类型的文件
 */
public class FileTypeException extends FileUploadException {

	private static final long serialVersionUID = -4668299874374727452L;

	public FileTypeException() {
		super();
	}

	public FileTypeException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public FileTypeException(String message, Throwable cause) {
		super(message, cause);
	}

	public FileTypeException(String message) {
		super(message);
	}

	public FileTypeException(Throwable cause) {
		super(cause);
	}

}
