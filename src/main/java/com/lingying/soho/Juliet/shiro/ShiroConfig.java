package com.lingying.soho.Juliet.shiro;

import java.util.HashMap;
import java.util.Map;

import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import at.pollux.thymeleaf.shiro.dialect.ShiroDialect;

/**
 * shiro 配置类
 * @author 张庆
 *
 */
@Configuration
public class ShiroConfig {
    /**
     * 创建 ShiroFilterFactoryBean
     * @return
     */
    @Bean
    public ShiroFilterFactoryBean getShiroFilterFactoryBean(@Qualifier("securityManager") DefaultWebSecurityManager securityManager) {

        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();

        //设置安全管理器
        shiroFilterFactoryBean.setSecurityManager(securityManager);
        /**
         * Shiro 内置过滤器
         * anon: 匿名访问
         * authc: 必须认证才能访问
         * user: 使用rememberMe的功能可以直接访问
         * perms: 该资源必须得到资源权限才能访问
         * role: 该资源必须得到角色权限才能访问
         */
        Map<String, String> filterMap = new HashMap<String, String>();

        filterMap.put("/register", "anon");
        filterMap.put("/login", "anon");
        //修改跳转页面
        shiroFilterFactoryBean.setLoginUrl("login");
        shiroFilterFactoryBean.setUnauthorizedUrl("unauth");
        shiroFilterFactoryBean.setFilterChainDefinitionMap(filterMap);


        return shiroFilterFactoryBean;
    }
    
    /**
     * 创建 DefaultWebSecurityManager
     * @param realm
     * @return
     */
    @Bean(name="securityManager")
    public DefaultWebSecurityManager getDefaultWebSecurityManager(@Qualifier("userRealm") UserRealm realm) {
        
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        
        securityManager.setRealm(realm);
        
        return securityManager;
    }
    
    /**
     * 创建 Realm
     * @return
     */
    @Bean(name="userRealm")
    public UserRealm getRealm() {
        return new UserRealm();
    }
    /**
     * 配置shiro的Dialect,用于thymeleaf和shiro标签配合使用
     */
    @Bean
    public ShiroDialect getShiroDialect() {
        return new ShiroDialect();
    }
}




