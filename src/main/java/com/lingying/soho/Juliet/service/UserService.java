package com.lingying.soho.Juliet.service;

import com.lingying.soho.Juliet.entity.User;

public interface UserService {
    /**
     * 用户注册
     * @param username 邮箱、手机号
     * @param password 密码
     * @param usertype 用户类型
     * @return
     */
    Integer register(String username, String password, Integer usertype);
    /**
     * 用户登录
     * @param username
     * @return
     */
    User login(String username);
}
