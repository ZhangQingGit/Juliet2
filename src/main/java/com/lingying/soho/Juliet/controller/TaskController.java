package com.lingying.soho.Juliet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lingying.soho.Juliet.entity.Task;
import com.lingying.soho.Juliet.entity.TaskV;
import com.lingying.soho.Juliet.service.TaskService;
import com.lingying.soho.Juliet.util.ResponseResult;
@Controller
@RequestMapping("task")
public class TaskController extends BaseController {
    @Autowired
    TaskService taskService;
    @RequestMapping("show")
    @ResponseBody
    public ResponseResult<List<TaskV>> showByLimit(){
        
        List<TaskV> t = taskService.showByLimit();
       
        return new ResponseResult<>(SUCCESS,t);
    }
    
    @RequestMapping("datails")
    @ResponseBody
    public ResponseResult<Task> showDatails(Integer rid){
        Task task = taskService.taskDatails(rid);
        
        return new ResponseResult<>(SUCCESS, task);
    }
}

