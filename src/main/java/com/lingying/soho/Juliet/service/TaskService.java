package com.lingying.soho.Juliet.service;

import java.util.List;

import com.lingying.soho.Juliet.entity.Task;
import com.lingying.soho.Juliet.entity.TaskV;

public interface TaskService {
    /**
     * 展示页面
     * @return
     */
    List<TaskV> showByLimit();
    /**
     * 任务详情页
     * @return
     */
    Task taskDatails(Integer rid);
}
