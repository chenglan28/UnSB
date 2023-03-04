
# UnSB
## 如何安装
这是一个综合性的QQ机器人  
npm依赖:  
- `OICQ` qq信息发送接口（必装）  
- `genshin-db` 原神json数据库（可选）  

安装命令：   
`npm i oicq@2.3.1 --save`
`npm i genshin-db@4.2.3 --save`  
## 配置信息
配置文件在`./config/`目录下  
账号密码 `./config/user.json`  
格式为  
```json
{
    "username":"example",
    "password":"123456",
    "method": 1
}
```
`method`字段为登录方法
- 填`0`为账户密码登录
- 填`1`为手机扫码登录
- - -
朋友和群聊的配置信息在  
- `./config/friend.json` 朋友  
- `./config/group.json` 群聊  
- - -
聊天机器人
`./config/talk`下有两个文件`friend.json`和`group.json`，分别表示朋友和群聊对话框中的聊天机器人自动回复配置  
默认格式为  
```json
["version","basic-chat","qr-code","weather","wallpaper","genshin"]
```   

- `version` 版本信息  
- `basic-chat` 基本聊天回复  
- `qr-code` 二维码功能，例如，生成二维码  
- `weather` 天气查询功能  
- `wallpaper` 获取壁纸功能  
- `genshin` 原神相关

例如，程序读到`version`参数时，会自动执行  
```javascript
require('./config/talk/group-or-friend/version.js')
```
您需要在对应的`.js`文件中使用  
```javascript
module.exports = [
    //xxx
]
```
导出模块
- - -
例如这是壁纸模块的源代码
```javascript
module.exports = [
    [["@UnSB", "获取壁纸"], undefined, true, function (msg) {
        function getWallPaperLink(callback) {
            ...
        };
        ...
        getWallPaperLink().then(function (a) {
            console.log(a);
            msg.reply([{ type: 'text', text: "为您找到一张" + kind[r] + "壁纸" },
            {
                type: 'image',
                file: a[Math.floor(Math.random() * 20)],
                url: a[Math.floor(Math.random() * 20)],
                asface: false
            }], true);
        });
    }]

];
```
第一个参数为一个数组，数组里面是响应的关键字  
**注意：这里机器人的名称是UnSB，需要@响应，您需要把UnSB换成实际机器人的昵称**  
第二个参数为回复的话语，接受`string`，如果需要逻辑处理请在此处留为`undefined`  
第三个参数为是否回复，接受bool值`true`或`false`  
第四个参数为逻辑处理，请传入一个`function`函数，定义如下  
```typescript
function (msg: Message): void
```
此处的`msg`为npm库[oicq](https://www.npmjs.org/package/oicq)的`Message`对象  
使用`msg.reply`以回复，更详细的文档请阅读`oicq`文档