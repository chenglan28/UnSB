
module.exports = [
    [['@UnSB', '今日天气'], undefined, true, function (msg) {
        var city = msg.raw_message.substring('@UnSB 今日天气'.length);
        city = Array.from(city); //String -> Array
        while (city[0] == ' ') city.shift();
        while (city[city.length - 1] == ' ') city.pop();
        //去除前后空格
        city = city.join(''); //Array -> String
        const weather_url = `https://www.wttr.in/${encodeURI(city)}.png`
        msg.reply([{ type: 'text', text: `为您找到 ${city} 的天气信息，最后更新于 协调世界时 ${new Date().toISOString()}` }, {
            type: 'image',
            file: weather_url,
            url: weather_url,
            asface: false
        }], true);
    }]
];