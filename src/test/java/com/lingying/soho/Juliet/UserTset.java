package com.lingying.soho.Juliet;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.lingying.soho.Juliet.entity.User;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTset {
    
    @Test
    public void set() {
        User use = new User();
        use.setEmail("643164399@qq.com");
        System.err.println(use);
    }
}
