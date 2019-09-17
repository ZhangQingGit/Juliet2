package com.lingying.soho.Juliet.mapper;

import org.apache.ibatis.annotations.Param;

import com.lingying.soho.Juliet.entity.User;

public interface UserMapper {
    /**
     * 根据email登录
     * @param username Email
     * @return
     */
    User findByEmail(String username);
    /**
     * 根据手机号登录
     * @param username Phone
     * @return
     */
    User findByPhone(String username);
    /**
     * 根据email注册
     * @param username email
     * @param password 密码
     * @param usertype 用户类型
     * @return
     */
    Integer EmailReg(@Param("username") String username
            , @Param("password") String password
            , @Param("usertype") Integer usertype);
    /**
     * 根据手机号插入
     * @param username 手机号
     * @param password 密码
     * @param usertype 用户类型
     * @return
     */
    Integer PhoneReg(@Param("username") String username
            , @Param("password") String password
            , @Param("usertype") Integer usertype);
}
