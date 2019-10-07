package com.lingying.soho.Juliet.service;

import com.lingying.soho.Juliet.entity.User;

import java.util.Map;

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
    /**
     * 得到用户id
     * @param username
     * @return
     */
    Integer findId(String username);
    /**
     * 查看本用户是否存在于团队表
     * @return
     */
    boolean findToTeamExit(Integer uid);
    /**
     * 查看本用户是否存在于公司表
     * @param uid
     * @return
     */
    boolean findToCompanyExit(Integer uid);

    /**
     * 根据uid查询个人/公司信息
     * @param uid
     * @return
     */
    Map<String,Object> findInformationByUid(Integer uid);

    /**
     * 根据uid查询账户密码
     * @param uid
     * @return
     */
    String findPasswordByUid(Integer uid);

    /**
     * 根据uid修改密码
     * @param uid
     * @return
     */
    Integer updatePasswordByUid(Integer uid,String password);

    /**
     * 根据uid查询用户昵称
     * @param uid
     * @return
     */
    String getNickNameByUid(Integer uid);
}
