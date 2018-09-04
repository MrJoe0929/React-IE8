/* 本地测试, 模拟服务 */

let express = require('express');
let app = express();
let bodyParser = require('body-parser');



let post = 8000;
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    
    next();
});

// 获取数据
let getData = require('./class/data.js');
app.get('/api/data', getData);

// 搜索请求
let searchData = require('./class/searchData.js');
app.use(bodyParser.json());
app.post('/api/searchData', searchData);

// 页面
let getPage = require('./class/page.js');
app.use('/', express.static(__dirname + '/class/pages'));
app.get('/', getPage);

app.listen(post, function () {
    console.log('现在开始监听端口， '+post);
});

