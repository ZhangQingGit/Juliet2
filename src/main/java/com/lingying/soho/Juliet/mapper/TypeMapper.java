package com.lingying.soho.Juliet.mapper;

public interface TypeMapper {
    /**
     * 查询所有一级列表信息
     * @return
     */
    String[] findOne();
    /**
     * 根据上级id查询二级列表信息
     * @return
     */
    String findTwo(String father);
   
}
