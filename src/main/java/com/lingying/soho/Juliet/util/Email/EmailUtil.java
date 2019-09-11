package com.lingying.soho.Juliet.util.Email;

import java.util.regex.Pattern;



public class EmailUtil {
	private static String emailRegexStr = "^[A-Za-z0-9\\u4e00-\\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$";
	private static SendingPool pool = SendingPool.getInstance();

	public static void send(String to, String subject, String content, String fileStr) {
		pool.addThread(new Sending(to, subject, content, fileStr));
	}

	public static boolean isEmailaddress(String Emailaddress) {
		return Pattern.matches(emailRegexStr, Emailaddress);
	}
	 public static void main(String[] args) {
			send("643164399@qq.com", "111", "111", "C:\\Users\\asus\\Desktop\\笔记.docx");
			
		}
}
