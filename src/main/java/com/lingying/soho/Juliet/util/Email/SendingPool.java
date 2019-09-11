package com.lingying.soho.Juliet.util.Email;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class SendingPool {

	private SendingPool() {
	}

	private static class Inner {
		private static SendingPool instance = new SendingPool();
	}

	public static SendingPool getInstance() {
		return Inner.instance;
	}

	private static int nThreads = 10;
	private static ExecutorService executor = Executors.newFixedThreadPool(nThreads);

	public SendingPool addThread(Sending sending) {
		executor.execute(sending);
		return getInstance();
	}

	public void shutDown() {
		executor.shutdown();
	}
}
