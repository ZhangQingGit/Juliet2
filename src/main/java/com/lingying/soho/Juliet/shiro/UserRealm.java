package com.lingying.soho.Juliet.shiro;

import java.util.Enumeration;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionContext;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;

import com.lingying.soho.Juliet.entity.User;
import com.lingying.soho.Juliet.service.UserService;

/**
 * 自定义realm
 * @author 张庆
 *
 */
public class UserRealm extends AuthorizingRealm{
    
    @Autowired
    private UserService userService;
    
    /**
     * 执行授权逻辑
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
//        info.addStringPermission("user:add");
        Subject subject = SecurityUtils.getSubject();
        User user = (User)subject.getPrincipal();
        info.addStringPermission(user.getUsertype().toString());
        
        return info;
    }
    /**
     * 执行认证逻辑
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        UsernamePasswordToken to = (UsernamePasswordToken)token;
        Object ses = SecurityUtils.getSubject().getSession().getAttribute(to.getUsername());
        
        User user = userService.login(to.getUsername());
        if(ses==null) {
            //用户名为空
            if(user == null) {
                return null;
            }
            //密码错误
            return new SimpleAuthenticationInfo(user,user.getPassword(),"");
        }else{
          //用户名为空
            if(user == null) {
                return null;
            }
            //验证码错误
            return new SimpleAuthenticationInfo(user,(String)ses,"");
        }
    }
}
