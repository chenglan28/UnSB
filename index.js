
/*data = require('./config.js').data;
const { createClient } = require("oicq");
const { segment } = require("oicq");
const onMessageReceive = require('./message.js').onMessageReceive;
const client = createClient(data.user);
var http = require('http');
var fs = require('fs');
var url = require('url');

client.on("message",onMessageReceive);//回复信息
client.on("system.login.slider", function (e) {
  console.log("输入ticket：")
  process.stdin.once("data", ticket => this.submitSlider(String(ticket).trim()))
}).login(data.password);//登录*/


data = require('./config.js').data;
const { createClient } = require('oicq');
const { segment } = require('oicq');
const onMessageReceive = require('./message.js').onMessageReceive;
const client = createClient(data.user);
var http = require('http');
var fs = require('fs');
var url = require('url');

client.on('message', onMessageReceive);//回复信息

const login_type = [() => {
  //密码登录
  client.on('system.login.error', (err) => {
    console.error('登录失败', err);
  });
  client.on('system.online', () => {
    console.log('登录成功');
  });
  client.on('system.login.device',function(e) {
    //账号被锁定
    client.sendSmsCode(); //短信验证
    console.log('请输入短信验证码\b');
    var buf = Buffer.alloc(16);
    var read_len = fs.readSync(process.stdin.fd, buf);
    client.submitSmsCode(buf.toString().substring(0, read_len));
  });
  client.login(data.password);
},
() => {
  //扫码登录
  client.on('system.login.error', (err) => {
    console.error('登录失败', err);
  });
  client.on('system.online', () => {
    console.log('登录成功');
  });
  client.on('system.login.qrcode', function (e) {
    console.log('扫描后按回车登录\b');
    process.stdin.once('data', () => {
      this.login();
    }); //参考doc
  }).login();
},
() => {
  //短信验证码登录
  client.on('system.login.error', (err) => {
    console.error('登录失败', err);
  });
  client.on('system.online', () => {
    console.log('登录成功');
  });
  console.error('暂不支持');

}];

login_type[data.login]();
setInterval(function(){console.clear()},10000)