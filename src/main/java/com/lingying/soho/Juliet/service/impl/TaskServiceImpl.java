package com.lingying.soho.Juliet.service.impl;

import java.util.List;

import com.lingying.soho.Juliet.entity.TaskList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingying.soho.Juliet.entity.Task;
import com.lingying.soho.Juliet.entity.TaskV;
import com.lingying.soho.Juliet.mapper.TaskMapper;
import com.lingying.soho.Juliet.service.TaskService;
@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskMapper task;
    @Override
    public List<TaskV> showByLimit() {
        return task.findByLimit();
    }
    
    @Override
    public Task taskDatails(Integer rid) {
        return task.findById(rid);
    }

    @Override
    public List<TaskList> taskList() {
        return task.taskList();
    }

}
