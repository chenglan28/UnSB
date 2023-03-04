const user_login_info = require('./config/user.json'); //用户登录信息
const talk_group_require = require('./config/talk/group.json'); //群聊聊天 路由处理
const talk_friend_require = require('./config/talk/friend.json');//私信聊天 路由处理
const group_routers = [];
const friend_routers = [];
for (var i = 0, len = talk_group_require.length; i < len; ++i) {
    group_routers.push(...require(`./config/talk/group/${talk_group_require[i]}.js`));
};
for (var i = 0, len = talk_friend_require.length; i < len; ++i) {
    friend_routers.push(...require(`./config/talk/group/${talk_friend_require[i]}.js`));
};
//包含路由
module.exports = {
    "data":{
        "user":user_login_info.username,
        "password":user_login_info.password,
        "group":require('./config/group.json'),
        "friend":require('./config/friend.json'),
        "login":user_login_info.method, //登录方式
        "Key":"C2339024080-342991836872-951195675779",
        "talk":{
            "group": group_routers,
            "friend": friend_routers
        }
    }//player.bilibili.com/player.html?aid=505820114&bvid=BV1Gg411F7xL&cid=417444484&page=1
}/*<iframe src="//player.bilibili.com/player.html?aid=505820114&bvid=BV1Gg411F7xL&cid=417444484&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>*/