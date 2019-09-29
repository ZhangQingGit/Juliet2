package com.lingying.soho.Juliet.entity;


import lombok.Data;

import java.util.Date;

@Data
public class Task {
    private Integer rid;
    private String cname;
    private String cemail;
    private Date tdate;
    private String pname;
    private String psynopsis;
    private String pmoney;
    private String findate;
    private String tasktype;
    private String core;
    private String tbidding;

}
