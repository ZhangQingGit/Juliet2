package com.lingying.soho.Juliet;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.lingying.soho.Juliet.entity.Menu;
import com.lingying.soho.Juliet.entity.Type;
import com.lingying.soho.Juliet.mapper.TypeMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TypeTest {
    @Autowired
    private TypeMapper mapper;
    @Test
    public void find() {
        String[] l = mapper.findOne();
        List<Type> ding = new ArrayList<Type>();
        for(int i=0;i<l.length;i++) {
            System.err.println(l[i]);
        }
    }

    @Test
    public void findId() {
        String l = mapper.findTwo("网站开发");
            System.out.println(l);
    }
    
    @Test
    public void showList() {
        List<Menu> list = new ArrayList<Menu>();
        String[] str = mapper.findOne();
        for (int i = 0; i<str.length; i++) {
            Menu menu = new Menu();
            String s = mapper.findTwo(str[i]);
            menu.setFather(str[i]);
            menu.setSon(s);
            System.err.println(menu);
            list.add(menu);
        }
        System.err.println(list);
    }
}
