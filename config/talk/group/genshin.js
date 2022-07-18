module.exports = [
    [["@UnSB", "原神角色查询:"], undefined, true, function (msg) {
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
            , true);
    }],
    [["@UnSB", "原神查询:"], undefined, true, function (msg) {
        var res = msg.raw_message.split(":");
        var genshindb = require('genshin-db');
        genshindb.setOptions({
            queryLanguages: ["ChineseSimplified"],
            resultLanguage: "ChineseSimplified"
        });
        var x = genshindb.characters(res[1], { matchCategories: true })//genshindb.characters(res[1]);
        msg.reply(x.join(",\n"), true);
    }],
    [["@UnSB", "原神命座查询:"], undefined, true, function (msg) {
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
            x.c6.effect, true);
    }],
    [["@UnSB", "原神副本查询:"], undefined, true, function (msg) {
        var res = msg.raw_message.split(":");
        console.log(res)
        var genshindb = require('genshin-db');
        genshindb.setOptions({
            queryLanguages: ["ChineseSimplified"],
            resultLanguage: "ChineseSimplified"
        });
        res[1] = res[1].replace("星期", "周");
        var x = genshindb.domains(res[1], { matchCategories: true });
        console.log(x)
        msg.reply(x.join(",\n"), true);
    }],
    [["@UnSB", "原神食物查询:"], undefined, true, function (msg) {
        var res = msg.raw_message.split(":");
        console.log(res)
        var genshindb = require('genshin-db');
        genshindb.setOptions({
            queryLanguages: ["ChineseSimplified"],
            resultLanguage: "ChineseSimplified"
        });
        if (res[1] == "派蒙" || res[1] == "6星食物") {
            msg.reply("派蒙,最好吃的六星食物,开局就送,\n会飞,肉嫩,\n应急食物\n", true);
        }
        else {
            res[1] = res[1].replace("星食物", "");
            var x = genshindb.foods(res[1], { matchCategories: true });
            console.log(x)
            if (x.description != undefined) msg.reply(x.description, true);
            else msg.reply(x.join(",\n"), true);
        }
    }]
];