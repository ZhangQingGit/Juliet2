package com.lingying.soho.Juliet.entity;

import lombok.Data;

@Data
public class User {
    private Integer uid;
    private String password;
    private String phone;
    private String email;
    private Integer usertype;
}
