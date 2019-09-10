package com.lingying.soho.Juliet;

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
       Integer i = task.addTask("甲骨文", "643164399@qq.com", "2019-9-10", "微信小程序", "网上购物", "5000000", "明天", "wechat", "");
       System.err.println("受影响行数："+i);
    }
    @Test
    public void select() {
        Task t = task.findById(1);
        System.err.println(t);
    }
}
