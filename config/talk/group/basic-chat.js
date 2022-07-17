module.exports = [
    [["@UnSB", "你好"], "你好！", true],
    [["@UnSB", "在吗"], undefined, true, function (msg) {
        msg.reply((Math.floor(Math.random() * 2) == 1) ? "在" : "干嘛", true)
    }],
    [["@UnSB", "你在干嘛"], "我在和你聊天!", true],
    [["@UnSB", "你过得怎样"], undefined, true, function (msg) {
        msg.reply((Math.floor(Math.random() * 2) == 1) ? "Great" : "非常不错", true)
    }],
    [["@UnSB", "你过得怎么样"], undefined, true, function (msg) {
        msg.reply((Math.floor(Math.random() * 2) == 1) ? "Great" : "非常不错", true)
    }],
    [["@UnSB", "陪我聊", "天"], "好啊！", true],
    [["@UnSB", "你喜欢吃"], "吃人！看个玩笑，吃啥都行！", true],
    [["@UnSB", "你是真人"], "你是弱智吗？", true],
    [["@UnSB", "你玩啥游戏"], undefined, true, function (msg) {
        msg.reply((Math.floor(Math.random() * 2) == 1) ? "原神" : "Minecraft", true)
    }],
    [["@UnSB", "我", "生气"], "别生气", true],
    [["@UnSB", "原石"], "想要~", true],
    [["@UnSB", "我出万叶"], "我出可莉啦！(实际并没有)", true],
    [["@UnSB", "我哭"], "(*＾3＾)别哭啦~", true],
    [["@UnSB", "你哭"], "就不哭", true],
    [["@UnSB", "我出一斗"], "我出阿忍啦！", true],
    [["@UnSB", "日入斗金"], "梦里啥都有", true],
    [["@UnSB", "好尴尬"], "把你脚趾扣出的三室二厅给我吧！", true],

    [["@UnSB", "好康的"], "player.bilibili.com/player.html?aid=500202981&bvid=BV1xK411G7eF&cid=253696805&page=1", true],
    [["@UnSB", "0元购"], "player.bilibili.com/player.html?aid=505820114&bvid=BV1Gg411F7xL&cid=417444484&page=1", true],
    [["@UnSB", "零元购"], "player.bilibili.com/player.html?aid=505820114&bvid=BV1Gg411F7xL&cid=417444484&page=1", true],
    [["@UnSB", "鸡汤"], "player.bilibili.com/player.html?aid=422038471&bvid=BV1a3411b7Ug&cid=452160448&page=1", true],
    [["@UnSB", "想吃"], "吃shit去吧你", true],
    [["@UnSB", "芜湖"], "(((((((((((っ•ω•)っ Σ(σ｀•ω•´)σ 起飞！", true],
    [["@UnSB", "帮我点份外卖"], "好的！您的外卖将在25点61分送达", true],
    [["@UnSB", "臭SB"], "臭狗屎", true],
    [["@UnSB", "饿了", "可以吃屎"], "可以", true],
    [["@UnSB", "版本"], "v1.14.51.4", true],
    [["@UnSB", "来点色图"], "https://www.bilibili.com/video/BV1GJ411x7h7?share_source=copy_web", true],
    [["@UnSB", "来点色图"], "https://www.bilibili.com/video/BV1Jg411o7J4?spm_id_from=333.337.search-card.all.click&vd_source=492dfac8975ff206243e06e8fcc28ff3", true],

    [["@UnSB", "访问", "小恐龙"], "https://chromedino.com/", true],
    [["@UnSB", "访问", "网易云音乐"], "https://music.163.com/", true],
    [["@UnSB", "访问", "网抑云"], "https://music.163.com/", true],
    [["@UnSB", "我的运气"], undefined, true, function (msg) {
        msg.reply((Math.floor(Math.random() * 100) < 50) ? "今天您的运气不太可以" : "今天您的运气非常好", true);
    }],
    [["@UnSB", "吃蓝莓", "护眼"], "多吃蓝莓是可以护眼，因为蓝莓中的花青素含量比较高，花青素属于视网膜光感器的必需营养素", true],
    [["@UnSB", "天敌", "什么"], "所谓的天敌关系，是一种相对的关系，对于一条蛇而言，它可以成为老鼠等啮齿类动物的天敌，同时梦禽类或者平头哥也可以成为一些蛇类的天敌。大体上可以理解成一种动物专门以另外一种动物为食物，这就是天敌关系", true],
    [["@UnSB", "土味情话"], undefined, false, function (msg) {
        var d = Math.floor(Math.random() * 3);
        var a = [["我觉得你接近我就是在害我", "害得我好喜欢你"],
        ["我最近要换个造型", "没你不行"],
        ["你知道你像什么吗？", "像地球一样吸引着我"]];

        msg.reply(a[d][0]);
        setTimeout(function () { msg.reply(a[d][1]); }, 1000);
    }],

];