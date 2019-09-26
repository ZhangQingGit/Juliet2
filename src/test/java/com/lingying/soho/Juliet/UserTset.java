package com.lingying.soho.Juliet;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.lingying.soho.Juliet.entity.User;
import com.lingying.soho.Juliet.mapper.UserMapper;
import com.lingying.soho.Juliet.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTset {
    @Autowired
    private UserService service;

}
