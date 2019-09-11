package com.lingying.soho.Juliet.util.Email;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.GeneralSecurityException;
import java.util.Date;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sun.mail.util.MailSSLSocketFactory;

public class EmailSend {
	private static String account = "liyubin@yinggooo.com"; // 登录用户名
	private static String pass = "OCKQqC524ZQbhe5hzlXEzg1/LQ5Y6huS"; // 登录密码
	private static String host = "smtp.exmail.qq.com"; // 服务器地址（邮件服务器）
	private static String port = "465"; // 端口
	private static String protocol = "smtp"; // 协议
	private static Logger logger = LoggerFactory.getLogger(EmailUtil.class);

	static class MyAuthenricator extends Authenticator {
		String u = null;
		String p = null;

		public MyAuthenricator(String u, String p) {
			this.u = u;
			this.p = p;
		}

		@Override
		protected PasswordAuthentication getPasswordAuthentication() {
			return new PasswordAuthentication(u, p);
		}
	}

	private String to; // 收件人
	private String subject; // 主题
	private String content; // 内容
	private String fileStr; // 附件路径

	public EmailSend(String to, String subject, String content, String fileStr) {
		this.to = to;
		this.subject = subject;
		this.content = content;
		this.fileStr = fileStr;
	}

	public void send() {
		logger.info("收件人：" + to);
		Properties prop = new Properties();
		// 协议
		prop.setProperty("mail.transport.protocol", protocol);
		// 服务器
		prop.setProperty("mail.smtp.host", host);
		// 端口
		prop.setProperty("mail.smtp.port", port);
		// 使用smtp身份验证
		prop.setProperty("mail.smtp.auth", "true");
		// 使用SSL，企业邮箱必需！
		// 开启安全协议
		MailSSLSocketFactory sf = null;
		try {
			sf = new MailSSLSocketFactory();
			sf.setTrustAllHosts(true);
		} catch (GeneralSecurityException e1) {
			e1.printStackTrace();
		}
		prop.put("mail.smtp.ssl.enable", "true");
		prop.put("mail.smtp.ssl.socketFactory", sf);

		Session session = Session.getDefaultInstance(prop,
				new MyAuthenricator(account, DESUtils.getDecryptString(pass)));
		session.setDebug(true);
		Message mimeMessage = new MimeMessage(session);
		try {
			// 发件人
			mimeMessage.setFrom(new InternetAddress(account, MimeUtility.encodeWord("领英智能科技", "UTF-8", "Q"))); // 可以设置发件人的别名
			// mimeMessage.setFrom(new InternetAddress(account)); //如果不需要就省略
			// 收件人
			mimeMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			// 主题
			mimeMessage.setSubject(MimeUtility.encodeWord(subject, "UTF-8", "Q"));
			// 时间
			mimeMessage.setSentDate(new Date());

			if (fileStr == null) {
				// 仅仅发送文本
				mimeMessage.setContent(content, "text/html; charset=UTF-8");
			} else {
				// 容器类，可以包含多个MimeBodyPart对象
				Multipart mp = new MimeMultipart();

				// MimeBodyPart可以包装文本，图片，附件
				MimeBodyPart body = new MimeBodyPart();
				// HTML正文
				body.setContent(content, "text/html; charset=UTF-8");
				mp.addBodyPart(body);
				// 添加图片&附件
				body = new MimeBodyPart();
				body.attachFile(fileStr);
				mp.addBodyPart(body);

				// 设置邮件内容
				mimeMessage.setContent(mp);
			}
			mimeMessage.saveChanges();
			Transport.send(mimeMessage);
			logger.info("收件人：" + to + ",发送成功");
		} catch (MessagingException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
