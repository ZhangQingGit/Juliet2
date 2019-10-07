package com.lingying.soho.Juliet.service;

import java.util.List;

import com.lingying.soho.Juliet.entity.*;

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

    /**
     * 根据项目名去查询rid
     * @param pname
     * @return
     */
    Integer findRidByPname(String pname);

    /**
     * 查询当前用户发布的任务
     * @param cortname
     * @return
     */
    List<Task> findReleaseTaskByCname(String cortname);

    /**
     * 查询当前用户发布的任务(分页)
     * @param page
     * @return
     */
    List<Task> findReleaseTaskLimitByCname(Page page);

    /**
     * 任务类型搜索下拉框的赋值
     * @return
     */
    String[] findTaskType();

    /**
     * 公司名搜索下拉框的赋值
     * @return
     */
    String[] findCname();

    /**
     * 在搜索框中搜索，先出现有关公司，在出现有关任务，模糊查询
     * @param msg
     * @return
     */
    List<TaskList> search(String msg, String tasktype);
}
