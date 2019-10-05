package com.lingying.soho.Juliet.util;

import java.io.Serializable;


public class ResponseResult<T> implements Serializable{

    /**
     * 
     */
    private static final long serialVersionUID = 1L;
    
    private Integer state;
    private Integer count;
    private String message;
    private T data;
    
    public ResponseResult() {
        super();
    }

    public ResponseResult(Integer state) {
        super();
        this.state = state;
    }

    public ResponseResult(Integer state, Integer count) {
        super();
        this.state = state;
        this.count = count;
    }

    public ResponseResult(Integer state, String message) {
        super();
        this.state = state;
        this.message = message;
    }

    public ResponseResult(Integer state, T data) {
        super();
        this.state = state;
        this.data = data;
    }

    public ResponseResult(Integer state, Integer count, T data) {
        super();
        this.state = state;
        this.count = count;
        this.data = data;
    }

    public ResponseResult(Integer state, Integer count, String message, T data) {
        super();
        this.state = state;
        this.count = count;
        this.data = data;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "ResponseResult{" +
                "state=" + state +
                ", count=" + count +
                ", message='" + message + '\'' +
                ", data=" + data +
                '}';
    }
}
