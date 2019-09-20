package com.lingying.soho.Juliet.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingying.soho.Juliet.entity.Company;
import com.lingying.soho.Juliet.entity.Team;
import com.lingying.soho.Juliet.entity.User;
import com.lingying.soho.Juliet.mapper.CompanyMapper;
import com.lingying.soho.Juliet.mapper.TeamMapper;
import com.lingying.soho.Juliet.mapper.UserMapper;
import com.lingying.soho.Juliet.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private TeamMapper teamMapper;
    @Autowired
    private CompanyMapper companyMapper;
    
    @Override
    public User login(String username) {
        if(username!=null & !"".equals(username)) {
            if(-1==username.indexOf("@")) {
                User user = userMapper.findByPhone(username);
                return user;
            }else {
                User user = userMapper.findByEmail(username);
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
                User user = userMapper.findByPhone(username);
                if(user!=null) {
                    return -1;
                }
            }else {
                User user = userMapper.findByEmail(username);
                if(user!=null) {
                    return -1;
                }
            }
        }
        //注册
        if(username!=null & !"".equals(username)) {
            if(-1==username.indexOf("@")) {
                Integer i = userMapper.PhoneReg(username, password, usertype);
                return i;
            }else {
                Integer i = userMapper.EmailReg(username, password, usertype);
                return i;
            }
        }
        return null;
    }

    @Override
    public Integer findId(String username) {
        if(username!=null & !"".equals(username)) {
            if(-1==username.indexOf("@")) {
                User user = userMapper.findByPhone(username);
                return user.getUid();
            }else {
                User user = userMapper.findByEmail(username);
                return user.getUid();
            }
        }
        return null;
    }

    @Override
    public Integer findToExit(Integer uid) {
        Company com = companyMapper.findByUid(uid);
        Team team = teamMapper.findByUid(uid);
        if(team!=null) {
            return 1;
        }
        if(com!=null) {
            return 1;
        }
        return 0;
    }

}
