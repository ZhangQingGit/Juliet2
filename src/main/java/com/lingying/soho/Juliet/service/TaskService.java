package com.lingying.soho.Juliet.service;

import java.util.List;

import com.lingying.soho.Juliet.entity.Task;
import com.lingying.soho.Juliet.entity.TaskBasic;
import com.lingying.soho.Juliet.entity.TaskList;
import com.lingying.soho.Juliet.entity.TaskV;

import javax.servlet.http.HttpSession;

public interface TaskService {
    /**
     * 发布任务时分3次进行，这是第一步插入基本信息，将这条数据的rid存入session
     * @param taskBasic
     * @param session
     * @return
     */
    Integer addTask(TaskBasic taskBasic, HttpSession session);

    /**
     * 发布任务第二步，根据rid更改psynopsis，即任务描述
     * @param rid
     * @param psynopsis
     * @return
     */
    Integer updatepSynopsis(String psynopsis, HttpSession session);

    /**
     * 发布任务第三步，根据rid更改core，即任务核心功能
     * @param rid
     * @param core
     * @return
     */
    Integer updateCore(String core, HttpSession session);
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

    /**
     * 搜索默认展示页
     * @return
     */
    List<TaskList> taskList();
}
