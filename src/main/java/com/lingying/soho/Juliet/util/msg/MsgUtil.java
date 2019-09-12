package com.lingying.soho.Juliet.util.msg;

import java.io.IOException;
import java.util.ArrayList;

import org.json.JSONException;

import com.github.qcloudsms.SmsSingleSender;
import com.github.qcloudsms.SmsSingleSenderResult;
import com.github.qcloudsms.httpclient.HTTPException;

public class MsgUtil {
    public static SmsSingleSenderResult msgUtil(String phone, String randomyzm) {
        // 短信应用SDK AppID
        int appid = 1400255532; // 1400开头

        // 短信应用SDK AppKey
        String appkey = "11e89dba054d4d320130ca5ea5cbae26";

        // 需要发送短信的手机号码
        //String[] phoneNumbers = {"12345678911", "12345678902", "12345678903"};

        // 短信模板ID，需要在短信应用中申请
        // NOTE: 这里的模板ID`7839`只是一个示例，
        // 真实的模板ID需要在短信控制台中申请
        int templateId = 418634;

        // 签名
        // NOTE: 这里的签名"腾讯云"只是一个示例，
        // 真实的签名需要在短信控制台中申请，另外
        // 签名参数使用的是`签名内容`，而不是`签名ID`
        String smsSign = "郑州领英";
        // 单发短信
        SmsSingleSenderResult result = null;
        try {
            ArrayList<String> params = new ArrayList<String>();
            params.add(randomyzm);
            params.add("30");
            SmsSingleSender ssender = new SmsSingleSender(appid, appkey);
            result = ssender.sendWithParam("86", phone, templateId, params, smsSign, "", "");
        } catch (HTTPException e) {
            // HTTP响应码错误
            e.printStackTrace();
        } catch (JSONException e) {
            // json解析错误
            e.printStackTrace();
        } catch (IOException e) {
            // 网络IO错误
            e.printStackTrace();
        }
        return result;
    }
}
