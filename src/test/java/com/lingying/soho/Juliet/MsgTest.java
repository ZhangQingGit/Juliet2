package com.lingying.soho.Juliet;

import com.lingying.soho.Juliet.util.msg.MsgUtil;

public class MsgTest {
    public static void main(String[] args) {
       MsgUtil.msgUtil("18639773263", randomInt());
    }
   
    
    
    
    
    
    
    
    
    
    
    
    
    private static String randomInt() {
        String c = "";
        String[] ch = new String[]{"0","1","2","3","4","5","6","7","8","9"};
        for (int i = 0; i < 6; i++) {
            c += ch[(int)(Math.random()*10)];
        }
        return c;
    }
}
