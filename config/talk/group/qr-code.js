
module.exports = [
    [['@UnSB', '生成二维码'], undefined, true, function (msg) {
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
]