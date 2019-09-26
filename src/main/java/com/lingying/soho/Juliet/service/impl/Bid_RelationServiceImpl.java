package com.lingying.soho.Juliet.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingying.soho.Juliet.entity.Bid_Relation;
import com.lingying.soho.Juliet.mapper.Bid_RelationMapper;
import com.lingying.soho.Juliet.service.Bid_RelationService;

@Service
public class Bid_RelationServiceImpl implements Bid_RelationService {

    @Autowired
    private Bid_RelationMapper bidMapper;
    @Override
    public Integer biddingPeo(String tname, String pname, String cname) {
        int row;
        Bid_Relation bid = bidMapper.findExist(tname, pname, cname);
        if(bid==null) {
            row = bidMapper.addRelation(tname, pname, cname);
            return row;
        }else {
            return -1;
        }
    }
    
    @Override
    public Integer Delbidding(String tname, String pname, String cname) {
           
        int row = bidMapper.delRelation(tname, pname, cname);
           
        return row;
        }
    
}
