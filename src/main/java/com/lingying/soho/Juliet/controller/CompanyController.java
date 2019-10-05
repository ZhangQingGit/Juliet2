package com.lingying.soho.Juliet.controller;

import javax.servlet.http.HttpSession;

import com.lingying.soho.Juliet.entity.Bid_Relation;
import com.lingying.soho.Juliet.entity.Company;
import com.lingying.soho.Juliet.entity.CompanyV;
import com.lingying.soho.Juliet.service.TaskService;
import com.lingying.soho.Juliet.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lingying.soho.Juliet.service.CompanyService;
import com.lingying.soho.Juliet.util.ResponseResult;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class CompanyController extends BaseController{
    @Autowired
    private CompanyService companyService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private TeamService teamService;

    @RequestMapping("companyReg")
    public String companyReg(String cname, String synopsis, HttpSession session, String cemail, String cphone, String involve, String homepage, String capital) {
        Object obj = session.getAttribute("uid");
        if(obj!=null) {
            Integer uid = (int)obj;
            Integer i = companyService.companyReg(cname, synopsis, uid, cemail, cphone, involve,homepage, capital);
            if(i==1) {
                return "indetal";
            }
        }
        return "perfect";
    }

    @RequestMapping("taskShow")
    @ResponseBody
    public ResponseResult<CompanyV> taskShow(String cname){
        CompanyV comv = companyService.taskShow(cname);
        return new ResponseResult<>(200, comv);
    }

    @RequestMapping("com_details")
    @ResponseBody
    public ResponseResult<Company> details(Integer cid){
        Company company = companyService.findById(cid);
        return new ResponseResult<>(200, company);
    }

    /**
     * 查询对我有意向的个人/团队的名称
     * @param session
     * @return
     */
    @RequestMapping("/findIntentionTeamByCname")
    @ResponseBody
    public List<Map<String,Object>> findIntentionTeamByCname(HttpSession session){
        Object uid=session.getAttribute("uid");
        if(uid != null){

            //获取当前的个人/公司名称
            String cname=companyService.getNameById((Integer) uid);

            //根据个人/公司名称去查询有意向的项目名
            List<Bid_Relation> pnameList = companyService.findIntentionPnameByCname(cname);

            List<Map<String,Object>> itList = new ArrayList();
            for (Bid_Relation bid_relation : pnameList) {
                Map<String,Object> map = new HashMap();

                //根据项目名去查询rid
                Integer rid=taskService.findRidByPname(bid_relation.getPname());
                //根据项目名去查询团队名称
                List<Bid_Relation> tnameList = companyService.findIntentionTnameByPname(bid_relation.getPname());

                //根据团队名称去查询tid
                List<Integer> tidList = new ArrayList<>();
                for (Bid_Relation bidRelation : tnameList) {
                    Integer tid = teamService.findTidByTname(bidRelation.getTname());
                    tidList.add(tid);
                }

                map.put("rid",rid);
                map.put("pname",bid_relation.getPname());
                map.put("tid",tidList);
                map.put("tname",tnameList);
                itList.add(map);
            }
            return itList;

        }else{
            return null;
        }
    }

    /**
     * 修改个人/公司的个人信息
     * @param company
     * @param session
     * @return
     */
    @RequestMapping("/updateCompanyInformation")
    @ResponseBody
    public ResponseResult<String> updateCompanyInformationByUid(Company company,HttpSession session){
        Object uid=session.getAttribute("uid");
        if(uid != null){
            company.setUid((Integer) uid);
            companyService.updateCompanyInformationByUid(company);
            return new ResponseResult<>(200,"添加成功");
        }

        return null;

    }
}
