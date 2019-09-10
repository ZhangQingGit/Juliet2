package com.lingying.soho.Juliet.controller;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.ExceptionHandler;

import com.lingying.soho.Juliet.controller.ex.FileEmptyException;
import com.lingying.soho.Juliet.controller.ex.FileIOException;
import com.lingying.soho.Juliet.controller.ex.FileSizeException;
import com.lingying.soho.Juliet.controller.ex.FileStateException;
import com.lingying.soho.Juliet.controller.ex.FileTypeException;
import com.lingying.soho.Juliet.controller.ex.FileUploadException;
import com.lingying.soho.Juliet.service.ex.AccessDeniedException;
import com.lingying.soho.Juliet.service.ex.AddressNotFoundException;
import com.lingying.soho.Juliet.service.ex.CartNotFoundException;
import com.lingying.soho.Juliet.service.ex.DeleteException;
import com.lingying.soho.Juliet.service.ex.InsertException;
import com.lingying.soho.Juliet.service.ex.PasswordNotMatchException;
import com.lingying.soho.Juliet.service.ex.ServiceException;
import com.lingying.soho.Juliet.service.ex.UpdateException;
import com.lingying.soho.Juliet.service.ex.UserNotFoundException;
import com.lingying.soho.Juliet.service.ex.UsernameDuplicateException;
import com.lingying.soho.Juliet.util.ResponseResult;


public class BaseController {
    /**
     * 响应结果时用于表示操作成功
     */
    protected static final int SUCCESS = 200;
    
    /**
     * 从Session获取uid
     * @param session HttpSession对象
     * @return 当前登录的用户的uid
     */
    protected final Integer getUidFromSession(HttpSession session) {
        return Integer.valueOf(session.getAttribute("uid").toString());
    }

    @ExceptionHandler({ServiceException.class, FileUploadException.class})
    public ResponseResult<Void> handleException(Exception e) {
        ResponseResult<Void> rr= new ResponseResult<>();
        rr.setMessage(e.getMessage());
        
        if (e instanceof UsernameDuplicateException) {
            // 400-用户名冲突异常
            rr.setState(400);
        } else if (e instanceof UserNotFoundException) {
            // 401-尝试访问的用户数据不存在
            rr.setState(401);
        } else if (e instanceof PasswordNotMatchException) {
            // 402-验证密码失败，密码错误
            rr.setState(402);
        } else if (e instanceof AddressNotFoundException) {
            // 403-收货地址数据不存在的异常
            rr.setState(403);
        } else if (e instanceof AccessDeniedException) {
            // 404-非法访问异常
            rr.setState(404);
        } else if (e instanceof CartNotFoundException) {
            // 405-购物车数据不存在
            rr.setState(405);
        } else if (e instanceof InsertException) {
            // 500-插入数据异常
            rr.setState(500);
        } else if (e instanceof UpdateException) {
            // 501-更新数据异常
            rr.setState(501);
        } else if (e instanceof DeleteException) {
            // 502-删除数据异常
            rr.setState(502);
        } else if (e instanceof FileEmptyException) {
            // 600-文件为空的异常，通常是上传文件时，没有选择文件就提交了请求，或者选择的文件是0字节的。
            rr.setState(600);
        } else if (e instanceof FileSizeException) {
            // 601-文件大小异常，通常为上传的文件的大小超出了限制
            rr.setState(601);
        } else if (e instanceof FileTypeException) {
            // 602-文件类型异常，通常是尝试上传不支持的类型的文件
            rr.setState(602);
        } else if (e instanceof FileStateException) {
            // 603-上传文件时操作状态异常
            rr.setState(603);
        } else if (e instanceof FileIOException) {
            // 604-上传文件时读写异常
            rr.setState(604);
        }
        
        return rr;
    }
}
