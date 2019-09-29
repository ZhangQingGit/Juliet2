package com.lingying.soho.Juliet.entity;

        import lombok.Data;

        import java.util.Date;
@Data
public class Hire {
    private Integer hid;
    private String tname;
    private String cname;
    private String pname;
    private Integer tfin;
    private Integer cfin;
    private Date hdate;
}
