package com.lingying.soho.Juliet.entity;

import lombok.Data;

@Data
/**
 * cname; 公司名
 * cemail; 公司邮箱
 * involve; 公司涉及领域
 * homepage; 公司主页
 * capital; 注册资金
 * @author 张庆
 */
public class CompanyV {
    private String cname;
    private String cemail;
    private String cphone;
    private String involve;
    private String homepage;
    private String capital;
}
