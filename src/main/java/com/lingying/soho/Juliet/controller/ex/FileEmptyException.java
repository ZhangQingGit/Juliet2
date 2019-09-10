package com.lingying.soho.Juliet.controller.ex;

/**
 * 文件为空的异常，通常是上传文件时，没有选择文件就提交了请求，或者选择的文件是0字节的。
 */
public class FileEmptyException extends FileUploadException {

	private static final long serialVersionUID = 1241017634099485103L;

	public FileEmptyException() {
		super();
	}

	public FileEmptyException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public FileEmptyException(String message, Throwable cause) {
		super(message, cause);
	}

	public FileEmptyException(String message) {
		super(message);
	}

	public FileEmptyException(Throwable cause) {
		super(cause);
	}

}
