package com.lingying.soho.Juliet.mapper;

import java.util.Date;
import java.util.List;

import com.lingying.soho.Juliet.entity.*;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.RequestMapping;

public interface TaskMapper {
    /**
     * 添加一条任务信息
     * @param cname 信息发布的公司名
     * @param cemail 信息发布的邮箱
     * @param tdate 信息发布时间
     * @param pname 项目名
     * @param psynopsos 项目描述
     * @param pmoney 项目预定金额
     * @param findate 任务预计完成时间
     * @param tasktype 任务类型
     * @param core 任务主要功能
     * @return 受影响行数
     */
    Integer addTask(TaskBasic taskBasic);

    /**
     * 根据rid修改psynopsis
     * @param psynopsis
     * @return
     */
    Integer updateTaskById(Integer rid,String psynopsis);

    /**
     * 根据rid修改core
     * @param rid
     * @param core
     * @return
     */
    Integer updateTaskCoreById(Integer rid, String core);
    /**
     * 根据cid 查询一条信息
     * @param cid
     * @return
     */
    Task findById(Integer rid);
    /**
     * 分页查询列表信息
     * @return
     */
    List<TaskV> findByLimit();

    /**
     * 搜索时默认显示
     * @return
     */
    List<TaskList> taskList();

    /**
     * 根据任务名模糊查询任务列表
     * @param pname
     * @return
     */
    List<TaskList> searchByPnameTaskList(@Param("pname") String pname, @Param("tasktype") String tasktype);

    /**
     * 根据公司名字模糊查询任务列表
     * @param cname
     * @return
     */
    List<TaskList> searchByCnameTaskList(@Param("cname") String cname, @Param("tasktype") String tasktype);

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
     * 在发布任务时任务类型的搜索下拉框
     * @return
     */
    String[] findTaskType();

}
