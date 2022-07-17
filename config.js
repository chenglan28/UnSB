module.exports = {
    "data":{
        "user":"",
        "password":"password",
        "group":[],
        "friend":[],
        "login":1,
        "Key":"C2339024080-342991836872-951195675779",
        "talk":{
            "group":[
                [["@UnSB","version"],"v0.4",true],
                [["UnSmart Bot"],"我在,你可以试着对我说“吃蓝莓可以护眼吗”\n更多功能正在研发,如需购买机器人请联系wx_chensiman",true],

                [["@UnSB","你好"],"你好！",true],  
                [["@UnSB","在吗"],undefined,true,function(msg){
                    msg.reply((Math.floor(Math.random()*2) == 1)?"在":"干嘛",true)
                }],  
                [["@UnSB","你在干嘛"],"我在和你聊天!",true],
                [["@UnSB","你过得怎样"],undefined,true,function(msg){
                    msg.reply((Math.floor(Math.random()*2) == 1)?"Great":"非常不错",true)
                }],
                [["@UnSB","你过得怎么样"],undefined,true,function(msg){
                    msg.reply((Math.floor(Math.random()*2) == 1)?"Great":"非常不错",true)
                }],
                [["@UnSB","陪我聊","天"],"好啊！",true],
                [["@UnSB","你喜欢吃"],"吃人！看个玩笑，吃啥都行！",true],
                [["@UnSB","你是真人"],"你是弱智吗？",true],
                [["@UnSB","你玩啥游戏"],undefined,true,function(msg){
                    msg.reply((Math.floor(Math.random()*2) == 1)?"原神":"Minecraft",true)
                }],
                [["@UnSB","我","生气"],"别生气",true],
                [["@UnSB","原石"],"想要~",true],
                [["@UnSB","我出万叶"],"我出可莉啦！(实际并没有)",true],
                [["@UnSB","我哭"],"(*＾3＾)别哭啦~",true],
                [["@UnSB","你哭"],"就不哭",true],
                [["@UnSB","我出一斗"],"我出阿忍啦！",true],
                [["@UnSB","日入斗金"],"梦里啥都有",true],
                [["@UnSB","好尴尬"],"把你脚趾扣出的三室二厅给我吧！",true],
                
                [["@UnSB","好康的"],"player.bilibili.com/player.html?aid=500202981&bvid=BV1xK411G7eF&cid=253696805&page=1",true],
                [["@UnSB","0元购"],"player.bilibili.com/player.html?aid=505820114&bvid=BV1Gg411F7xL&cid=417444484&page=1",true],
                [["@UnSB","零元购"],"player.bilibili.com/player.html?aid=505820114&bvid=BV1Gg411F7xL&cid=417444484&page=1",true],
                [["@UnSB","鸡汤"],"player.bilibili.com/player.html?aid=422038471&bvid=BV1a3411b7Ug&cid=452160448&page=1",true],
                [["@UnSB","想吃"],"吃shit去吧你",true],
                [["@UnSB","芜湖"],"(((((((((((っ•ω•)っ Σ(σ｀•ω•´)σ 起飞！",true],
                [["@UnSB","帮我点份外卖"],"好的！您的外卖将在25点61分送达",true],
                [["@UnSB","臭SB"],"臭狗屎",true],
                [["@UnSB","饿了","可以吃屎"],"可以",true],
                [["@UnSB","版本"],"v1.14.51.4",true],
                [["@UnSB","来点色图"],"https://www.bilibili.com/video/BV1GJ411x7h7?share_source=copy_web",true],
                [["@UnSB","来点色图"],"https://www.bilibili.com/video/BV1Jg411o7J4?spm_id_from=333.337.search-card.all.click&vd_source=492dfac8975ff206243e06e8fcc28ff3",true],

                [["@UnSB","访问","小恐龙"],"https://chromedino.com/",true],
                [["@UnSB","访问","网易云音乐"],"https://music.163.com/",true],
                [["@UnSB","访问","网抑云"],"https://music.163.com/",true],

                [['@UnSB','生成二维码'],undefined,true,function(msg) {
                    var code = msg.raw_message.substring('@UnSB 生成二维码'.length);
                    code = Array.from(code); //String -> Array
                    while (code[0] == ' ') code.shift();
                    while (code[code.length - 1] == ' ') code.pop();
                    //去除前后空格
                    code = code.join(''); //Array -> String
                    msg.reply([
                        {
                            type: 'text',
                            text: '成功生成二维码'
                        },
                        {
                            type: 'image',
                            file: 'https://api.dzzui.com/api/qrcode?url=' + code,
                            url: 'https://api.dzzui.com/api/qrcode?url=' + code,
                            asface: false
                        }
                    ])
                }],
                [["@UnSB","我的运气"],undefined,true,function(msg){
                    msg.reply((Math.floor(Math.random() * 100)<50)?"今天您的运气不太可以":"今天您的运气非常好",true);
                }],
                [["@UnSB","原神角色查询:"],undefined,true,function(msg){
                    var res = msg.raw_message.split(":");
                    var genshindb = require('genshin-db');
                    genshindb.setOptions({
                        queryLanguages: ["ChineseSimplified"],
                        resultLanguage: "ChineseSimplified"
                    });
                    var x = genshindb.characters(res[1]);
                    msg.reply("角色名:" + x.name + 
                    "\n" + x.description + 
                    "\n" + x.rarity + "星角色" + 
                    "\n元素:" + x.element + 
                    "\n武器类型:" + x.weapontype + 
                    "\n性别" + x.gender + 
                    "\n所属" + x.region + 
                    "\n居住于" + x.affiliation + 
                    "\n生日:" + x.birthday + 
                    "\n命之座:" + x.constellation + 
                    "\nCV:" + 
                    "\n中文:" + x.cv.chinese + 
                    "\n英文:" + x.cv.english + 
                    "\n日文:" + x.cv.japanese + 
                    "\n韩文:" + x.cv.korean
                    ,true);
                }],
                [["@UnSB","原神查询:"],undefined,true,function(msg){
                    var res = msg.raw_message.split(":");
                    var genshindb = require('genshin-db');
                    genshindb.setOptions({
                        queryLanguages: ["ChineseSimplified"], 
                        resultLanguage: "ChineseSimplified"
                    });
                    var x = genshindb.characters(res[1], { matchCategories: true })//genshindb.characters(res[1]);
                    msg.reply(x.join(",\n"),true);
                }],
                [["@UnSB","原神命座查询:"],undefined,true,function(msg){
                    var res = msg.raw_message.split(":");
                    var genshindb = require('genshin-db');
                    genshindb.setOptions({
                        queryLanguages: ["ChineseSimplified"], 
                        resultLanguage: "ChineseSimplified"
                    });
                    var x = genshindb.constellations(res[1])
                    msg.reply(x.name + "的命座\n" + 
                    x.c1.name + "(一命)\n" + 
                    x.c1.effect + "\n" + 
                    x.c2.name + "(二命)\n" + 
                    x.c2.effect + "\n" + 
                    x.c3.name + "(三命)\n" + 
                    x.c3.effect + "\n" + 
                    x.c4.name + "(四命)\n" + 
                    x.c4.effect + "\n" + 
                    x.c5.name + "(五命)\n" + 
                    x.c5.effect + "\n" + 
                    x.c6.name + "(六命)\n" + 
                    x.c6.effect,true);
                }],
                [["@UnSB","原神副本查询:"],undefined,true,function(msg){
                    var res = msg.raw_message.split(":");
                    console.log(res)
                    var genshindb = require('genshin-db');
                    genshindb.setOptions({
                        queryLanguages: ["ChineseSimplified"], 
                        resultLanguage: "ChineseSimplified"
                    });
                    res[1] = res[1].replace("星期","周");
                    var x = genshindb.domains(res[1], { matchCategories: true } );
                    console.log(x)
                    msg.reply(x.join(",\n"),true);
                }],
                [["@UnSB","原神食物查询:"],undefined,true,function(msg){
                    var res = msg.raw_message.split(":");
                    console.log(res)
                    var genshindb = require('genshin-db');
                    genshindb.setOptions({
                        queryLanguages: ["ChineseSimplified"], 
                        resultLanguage: "ChineseSimplified"
                    });
                    if(res[1] == "派蒙" || res[1] == "6星食物"){
                        msg.reply("派蒙,最好吃的六星食物,开局就送,\n会飞,肉嫩,\n应急食物\n",true);
                    }
                    else {
                        res[1] = res[1].replace("星食物","");
                        var x = genshindb.foods(res[1], { matchCategories: true } );
                        console.log(x)
                        if(x.description != undefined)msg.reply(x.description,true);
                        else msg.reply(x.join(",\n"),true);
                    }
                }],
                [["@UnSB","吃蓝莓","护眼"],"多吃蓝莓是可以护眼，因为蓝莓中的花青素含量比较高，花青素属于视网膜光感器的必需营养素",true],
                [["@UnSB","天敌","什么"],"所谓的天敌关系，是一种相对的关系，对于一条蛇而言，它可以成为老鼠等啮齿类动物的天敌，同时梦禽类或者平头哥也可以成为一些蛇类的天敌。大体上可以理解成一种动物专门以另外一种动物为食物，这就是天敌关系",true],
                [["@UnSB","土味情话"],undefined,false,function(msg){
                    var d = Math.floor(Math.random() * 3);
                    var a = [["我觉得你接近我就是在害我","害得我好喜欢你"],
                             ["我最近要换个造型","没你不行"],
                             ["你知道你像什么吗？","像地球一样吸引着我"]];
                            
                            msg.reply(a[d][0]);
                            setTimeout(function(){msg.reply(a[d][1]);},1000);
                }],
                [['@UnSB','今日天气'],undefined,true,function(msg) {
                    var city = msg.raw_message.substring('@UnSB 今日天气'.length);
                    city = Array.from(city); //String -> Array
                    while (city[0] == ' ') city.shift();
                    while (city[city.length - 1] == ' ') city.pop();
                    //去除前后空格
                    city = city.join(''); //Array -> String
                    const weather_url = `https://www.wttr.in/${encodeURI(city)}.png`
                    msg.reply([{ type: 'text', text:`为您找到 ${city} 的天气信息，最后更新于 协调世界时 ${new Date().toISOString()}`},{
                        type: 'image',
                        file: weather_url,
                        url: weather_url,
                        asface: false
                    }],true);

                }],
                [["@UnSB","获取壁纸"],undefined,true,function(msg){
                    const https = require('https');
                    var kind = ["原神","自然风景","随机"];
                    var r = Math.floor(Math.random()*kind.length);
                    var link = ["https://wallhaven.cc/api/v1/search?q=Genshin+Impact&categories=110&purity=100&sorting=relevance&order=desc",
                                "https://wallhaven.cc/api/v1/search?q=id:37&sorting=random&ref=fp",
                                "https://wallhaven.cc/api/v1/search?categories=110&purity=100&sorting=random&order=desc"
                            ];
                    function getWallPaperLink(callback) {
                        return new Promise(function(resolve, reject) {
                            var download_list = [];
                            var data = [];
                            https.get(link[r], function (req) {
                                req.on('data', d => {
                                    data.push(d);
                                });
                                req.on('error', err => {
                                    console.error(err);
                                });
                                req.on('end', function () {
                                    var s = '';
                                    for (var i = 0; i < data.length; i++) {
                                        s += data[i];
                                    };
                                    s = JSON.parse(s); //parse data
                                    for (var i = 0; i < s.data.length; i++) {
                                        download_list.push(s.data[i].path);
                                    };
                                    if (callback) callback(download_list);
                                    resolve(download_list);
                                });
                            });
                        })
                    };
                    getWallPaperLink().then(function(a){
                        console.log(a);
                        msg.reply([{ type: 'text', text:"为您找到一张" + kind[r] + "壁纸"},
                        {
                            type: 'image',
                            file: a[Math.floor(Math.random()*20)],
                            url: a[Math.floor(Math.random()*20)],
                            asface: false
                        }],true);
                    });
                }]
            ],
            "friend":[
                ]
        }
    }//player.bilibili.com/player.html?aid=505820114&bvid=BV1Gg411F7xL&cid=417444484&page=1
}/*<iframe src="//player.bilibili.com/player.html?aid=505820114&bvid=BV1Gg411F7xL&cid=417444484&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>*/