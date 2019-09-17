package com.lingying.soho.Juliet.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingying.soho.Juliet.entity.User;
import com.lingying.soho.Juliet.mapper.UserMapper;
import com.lingying.soho.Juliet.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper mapper;
    
    @Override
    public User login(String username) {
        User user = mapper.findByUsername(username);
        return user;
    }

}
