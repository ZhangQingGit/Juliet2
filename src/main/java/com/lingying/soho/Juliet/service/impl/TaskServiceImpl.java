package com.lingying.soho.Juliet.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.github.pagehelper.PageHelper;
import com.lingying.soho.Juliet.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingying.soho.Juliet.mapper.TaskMapper;
import com.lingying.soho.Juliet.service.TaskService;

import javax.servlet.http.HttpSession;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskMapper taskMapper;

    @Override
    public Integer addTask(TaskBasic taskBasic, HttpSession session) {
        taskBasic.setTdate(new Date());
        Integer i = taskMapper.addTask(taskBasic);
        session.setAttribute("rid", taskBasic.getRid());
        return i;
    }

    @Override
    public Integer updatepSynopsis(String psynopsis, HttpSession session) {
        Object obj = session.getAttribute("rid");
        Integer row = 0;
        if(obj!=null){
            row = taskMapper.updateTaskById((int)obj, psynopsis);
        }
        return row;
    }

    @Override
    public Integer updateCore( String core, HttpSession session) {
        Object obj = session.getAttribute("rid");
        Integer row = 0;
        if(obj!=null){
            row = taskMapper.updateTaskCoreById((int)obj, core);
        }
        return row;
    }


    @Override
    public List<TaskV> showByLimit() {
        return taskMapper.findByLimit();
    }
    
    @Override
    public Task taskDatails(Integer rid) {
        return taskMapper.findById(rid);
    }

    @Override
    public PageResult taskList(Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        com.github.pagehelper.Page result =(com.github.pagehelper.Page)taskMapper.taskList();
        return new PageResult(result.getTotal(), result.getResult());
    }

    @Override
    public Integer findRidByPname(String pname) {
        return taskMapper.findRidByPname(pname);
    }

    @Override
    public List<Task> findReleaseTaskByCname(String cortname) {
        return taskMapper.findReleaseTaskByCname(cortname);
    }

    @Override
    public List<Task> findReleaseTaskLimitByCname(Page page) {
        return taskMapper.findReleaseTaskLimitByCname(page);
    }

    @Override
    public String[] findTaskType() {
        return taskMapper.findTaskType();
    }

    @Override
    public String[] findCname() {
        return taskMapper.findCname();
    }

    @Override
    public PageResult search(String msg, String tasktype, Integer pageNum, Integer pageSize, HttpSession session) {
        if(tasktype!=null){
            tasktype=tasktype.trim();
            session.setAttribute("tasktype", tasktype);
        }
        if(msg!=null){
            session.setAttribute("msg", msg);
        }
        List<TaskList> list = taskMapper.searchByCnameTaskList((String) session.getAttribute("msg"), (String) session.getAttribute("tasktype"));
        if(list.size()!=0){
            PageHelper.startPage(pageNum, pageSize);
            com.github.pagehelper.Page result = new com.github.pagehelper.Page();
            result = (com.github.pagehelper.Page) taskMapper.searchByCnameTaskList((String) session.getAttribute("msg"), (String) session.getAttribute("tasktype"));
            return new PageResult(result.getTotal(), result.getResult());
        }else{
            PageHelper.startPage(pageNum, pageSize);
            com.github.pagehelper.Page result = new com.github.pagehelper.Page();
            result = (com.github.pagehelper.Page) taskMapper.searchByPnameTaskList((String) session.getAttribute("msg"), (String) session.getAttribute("tasktype"));
            return new PageResult(result.getTotal(), result.getResult());
        }
    }


}
