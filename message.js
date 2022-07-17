module.exports = {
    onMessageReceive
}
function parse(key,user){if(key.search("C") != -1){key=key.replace("C","");key=key.split("-");var y=key[0];key[0]=key[0]*1;key[1]=key[1]*1;key[2]=key[2]*1;if(key[1]==345330860952-key[0]&&key[2]==953534699859-key[0]){user=user.toString().split("");var x=0;var res=[[],[]];for(var i = 0;i<user.length;i++){x++;if(x%2==1)res[0].push(user[i]);else res[1].push(user[i]);}res=res[0].concat(res[1]);res=res.join("");res=res*1;if(res==y){return true}else{return false}}else{return false}}else{return false}}
if(parse(data.Key,data.user) == false){console.log("\x1b[36m您现在使用的是使用版,请联系QQ2234309800购买")}
function onMessageReceive(msg){
    var fs = require('fs');
    if(msg.message_type == "group"){
        var flag = 0;//是否已支付标识
        if(parse(data.Key,data.user) == true){
            for(var i = 0;i<data.group.length;i++){
                if(data.group[i] == msg.group_id)flag = 1;
            }
            fs.open('log/group/' + msg.group_id + '.txt', 'a', function(err, fd) {
                if (err) {
                    return console.error(err);
                }
            });
            fs.readFile('log/group/' + msg.group_id + '.txt', function (err, data) {
                if (err) {
                    console.log("\x1b[37m[\x1b[36m" + new Date() + "\x1b[37m]\x1b[31m" + err + "\x1b[37m");
                }
                fs.writeFile('log/group/' + msg.group_id + '.txt',data.toString() + msg.group_name + '[' + msg.time + ']' + msg.sender.user_id + " " + msg.sender.nickname + ' : ' + msg.raw_message + '\n',function(err) {
                    if(err){
                        console.log("\x1b[37m[\x1b[36m" + new Date() + "\x1b[37m]\x1b[31m" + err + "\x1b[37m");
                    }
                });
            });//从文件系统中读取请求的文件内容  
        }
        else if(data.group[0] == msg.group_id)flag = 1;
        if(flag == 1){
            for(var i = 0;i<data.talk.group.length;i++){
                var x = 0;//条件满足数
                for(var j = 0;j<data.talk.group[i][0].length;j++){
                    if(msg.raw_message.search(data.talk.group[i][0][j]) != -1)x++;
                }
                if(x == data.talk.group[i][0].length){
                    if(data.talk.group[i][3])data.talk.group[i][3](msg);
                    if(data.talk.group[i][1])msg.reply(data.talk.group[i][1],data.talk.group[i][2]);
                }
            }
        }
    }
    else{
        var flag = 0;//是否已支付标识
        if(parse(data.Key,data.user) == true){
            for(var i = 0;i<data.group.length;i++){
                if(data.friend[i] == msg.user_id)flag = 1;
            }
            fs.open('log/friend/' + msg.sender.user_id + '.txt', 'a', function(err, fd) {
                if (err) {
                    return console.error(err);
                }  
            });
            fs.readFile('log/friend/' + msg.sender.user_id + '.txt', function (err, data) {
                if (err) {
                    console.log("\x1b[37m[\x1b[36m" + new Date() + "\x1b[37m]\x1b[31m" + err + "\x1b[37m");
                }
                fs.writeFile('log/friend/' + msg.sender.user_id + '.txt',data.toString() + '[' + msg.time + ']' + msg.sender.nickname + ' : ' + msg.raw_message + '\n',function(err) {
                    if(err){
                        console.log("\x1b[37m[\x1b[36m" + new Date() + "\x1b[37m]\x1b[31m" + err + "\x1b[37m");
                    }
                });
            });//从文件系统中读取请求的文件内容 
        }
        else if(data.friend[0] == msg.user_id)flag = 1;
        if(flag == 1){
            for(var i = 0;i<data.talk.friend.length;i++){
                var x = 0;//条件满足数
                for(var j = 0;j<data.talk.friend[i][0].length;j++){
                    if(msg.raw_message.search(data.talk.friend[i][0][j]) != -1)x++;
                }
                if(x == data.talk.friend[i][0].length){
                    if(data.talk.friend[i][3])data.talk.friend[i][3](msg);
                    if(data.talk.friend[i][1])msg.reply(data.talk.friend[i][1],data.talk.friend[i][2]);
                }
            }
        }
    }
}