package com.lingying.soho.Juliet.mapper;

import com.lingying.soho.Juliet.entity.User;

public interface UserMapper {
    
    User findByUsername(String username);
}
