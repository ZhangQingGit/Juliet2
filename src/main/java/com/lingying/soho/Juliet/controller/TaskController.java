package com.lingying.soho.Juliet.controller;

import java.util.Date;
import java.util.List;

import com.lingying.soho.Juliet.entity.TaskBasic;
import com.lingying.soho.Juliet.entity.TaskList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lingying.soho.Juliet.entity.Task;
import com.lingying.soho.Juliet.entity.TaskV;
import com.lingying.soho.Juliet.service.TaskService;
import com.lingying.soho.Juliet.util.ResponseResult;

import javax.servlet.http.HttpSession;

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
    
    @RequestMapping("bidding")
    @ResponseBody
    public ResponseResult<String> taskBidding(){
        return null;
    }

    @RequestMapping("taskList")
    @ResponseBody
    public ResponseResult<List<TaskList>> taskList(){
        List<TaskList> list = taskService.taskList();
        return new ResponseResult<>(200,list);
    }
    @RequestMapping("taskPush_One")
    @ResponseBody
    public ResponseResult<String> taskPush(TaskBasic taskBasic, HttpSession session){
        Integer i = taskService.addTask(taskBasic, session);
        if(i==1){
            return new ResponseResult<>(200, "OK");
        }
        return new ResponseResult<>(201, "失败");
    }

    @RequestMapping("taskPush_Two")
    @ResponseBody
    public ResponseResult<String> updatePsynopsis(String psynopsis, HttpSession session){
        Integer i = taskService.updatepSynopsis(psynopsis, session);
        if(i==1){
            return new ResponseResult<>(200, "OK");
        }
        return new ResponseResult<>(201, "失败");
    }

    @RequestMapping("taskPush_Three")
    @ResponseBody
    public ResponseResult<String> updateCore(String core, HttpSession session){
        Integer i = taskService.updateCore(core, session);
        if(i==1){
            return new ResponseResult<>(200, "OK");
        }
        return new ResponseResult<>(201, "失败");
    }
}

