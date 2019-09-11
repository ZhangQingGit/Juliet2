package com.lingying.soho.Juliet;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.lingying.soho.Juliet.entity.Task;
import com.lingying.soho.Juliet.mapper.TaskMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskTest {
    @Autowired
    TaskMapper task;
    @Test
    public void addTask() {
       Integer i = task.addTask("阿里巴巴", "alibaba@ali.com", "2019-9-11", "手机APP", "网上购物", "10000000", "明天", "APP", "");
       System.err.println("受影响行数："+i);
    }
    @Test
    public void selectById() {
        Task t = task.findById(1);
        System.err.println(t);
    }
    @Test
    public void SelectByLimit() {
        List<Task> t = task.findByLimit();
        for (Task task : t) {
            System.err.println(task);
        }
    }
}
