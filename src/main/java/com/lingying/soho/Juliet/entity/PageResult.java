package com.lingying.soho.Juliet.entity;

import lombok.Data;

import java.util.List;

@Data
public class PageResult {
    /**
     * 记录总数
     */
    private long totalSize;
    /**
     * 查出的数据
     */
    private List data;
    /**
     * 总页数
     */
    private Integer pages;
    public PageResult() {
    }

    public PageResult(long totalSize,List data) {
        this.totalSize = totalSize;
        this.data = data;
    }
}
