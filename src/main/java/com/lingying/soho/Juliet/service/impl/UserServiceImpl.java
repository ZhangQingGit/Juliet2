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
        if(username!=null & !"".equals(username)) {
            if(-1==username.indexOf("@")) {
                User user = mapper.findByPhone(username);
                return user;
            }else {
                User user = mapper.findByEmail(username);
                return user;
            }
        }
        return null;
    }

    @Override
    public Integer register(String username, String password, Integer usertype) {
        //不可重复
        if(username!=null & !"".equals(username)) {
            if(-1==username.indexOf("@")) {
                User user = mapper.findByPhone(username);
                if(user!=null) {
                    return -1;
                }
            }else {
                User user = mapper.findByEmail(username);
                if(user!=null) {
                    return -1;
                }
            }
        }
        //注册
        if(username!=null & !"".equals(username)) {
            if(-1==username.indexOf("@")) {
                Integer i = mapper.PhoneReg(username, password, usertype);
                return i;
            }else {
                Integer i = mapper.EmailReg(username, password, usertype);
                return i;
            }
        }
        return null;
    }

}
