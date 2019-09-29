package com.lingying.soho.Juliet.service.impl;

import java.util.Date;
import java.util.List;

import com.lingying.soho.Juliet.entity.TaskBasic;
import com.lingying.soho.Juliet.entity.TaskList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingying.soho.Juliet.entity.Task;
import com.lingying.soho.Juliet.entity.TaskV;
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
    public List<TaskList> taskList() {
        return taskMapper.taskList();
    }

}
