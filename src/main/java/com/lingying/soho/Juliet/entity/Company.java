package com.lingying.soho.Juliet.entity;

import lombok.Data;

@Data
/**
 * cid; 公司表id
 * cname; 公司名
 * synopsis; 公司简介
 * cemail; 公司邮箱
 * pname; 公司发布项目名
 * involve; 公司涉及领域
 * homepage; 公司主页
 * capital; 注册资金
 * psynopsis; 项目功能描述
 * tasktype; 项目类型
 * @author 张庆
 */
public class Company {
    private Integer cid;
    private String cname;
    private Integer uid;
    private String synopsis;
    private String cemail;
    private String cphone;
    private String involve;
    private String homepage;
    private String capital;
    private String pname;
    private String psynopsis;
    private String tasktype;
}
