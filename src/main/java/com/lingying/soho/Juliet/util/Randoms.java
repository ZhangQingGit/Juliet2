package com.lingying.soho.Juliet.util;

public class Randoms {
    public static String randomInt() {
        String c = "";
        String[] ch = new String[]{"0","1","2","3","4","5","6","7","8","9"};
        for (int i = 0; i < 6; i++) {
            c += ch[(int)(Math.random()*10)];
        }
        return c;
    }
}
