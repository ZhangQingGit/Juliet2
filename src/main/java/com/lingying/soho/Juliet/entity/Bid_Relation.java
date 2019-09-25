package com.lingying.soho.Juliet.entity;

import lombok.Data;

/**
 * 竞标关系表
 * @author 张庆
 *
 */
@Data
public class Bid_Relation {
    private Integer bidid;
    private String tname;
    private String pname;
    private String cname;
}
