package com.lingying.soho.Juliet.entity;

import lombok.Data;

@Data
public class TaskList {
    //task.pname,task.psynopsis,task.tasktype,task.findate,task.tdate,company.cname,company.involve,company.involve
    private String pname;
    private Integer rid;
    private String psynopsis;
    private String tasktype;
    private String findate;
    private String pmoney;
    private String tdate;
    private String cname;
    private String involve;
}
