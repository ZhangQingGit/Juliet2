package com.lingying.soho.Juliet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lingying.soho.Juliet.entity.Task;
import com.lingying.soho.Juliet.service.TaskService;
import com.lingying.soho.Juliet.util.ResponseResult;
@Controller
@RequestMapping("task")
public class TaskController extends BaseController {
    @Autowired
    TaskService task;
    @RequestMapping("show")
    @ResponseBody
    public ResponseResult<List<Task>> showByLimit(){
        List<Task> t = task.showByLimit();
       
        return new ResponseResult<>(SUCCESS,t);
    }
}
