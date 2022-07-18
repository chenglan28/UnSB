
module.exports = [
    [["@UnSB", "获取壁纸"], undefined, true, function (msg) {
        const https = require('https');
        var kind = ["原神", "自然风景", "随机"];
        var r = Math.floor(Math.random() * kind.length);
        var link = ["https://wallhaven.cc/api/v1/search?q=Genshin+Impact&categories=110&purity=100&sorting=relevance&order=desc",
            "https://wallhaven.cc/api/v1/search?q=id:37&sorting=random&ref=fp",
            "https://wallhaven.cc/api/v1/search?categories=110&purity=100&sorting=random&order=desc"
        ];
        function getWallPaperLink(callback) {
            return new Promise(function (resolve, reject) {
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