//cnpm install qcloudsms_js -S
import QcloudSms  from "qcloudsms_js"   //依赖模块
export default(phoneNumbers,params)=>{
    
var appid = 1400226626;     //SDK AppID
var appkey = "b746f20293973e046b780ce55bca4000";   //SDK AppKey
var phoneNumbers = phoneNumbers;    //数组存储手机号
var templateId = 366072;      //短信模板编号
var qcloudsms = QcloudSms(appid, appkey);   //实例化

var ssender = qcloudsms.SmsSingleSender();   
var params = params;
ssender.sendWithParam(86, phoneNumbers, templateId,
params, "", "", "", callback);


function callback(err, res, resData) {
  if (err) {
      console.log("err: ", err);
  } else {
      console.log("request data: ", res.req);
      console.log("response data: ", resData);
  }
}
}