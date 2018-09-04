let fs = require('fs');
var querystring = require('querystring');

module.exports = function (req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json:charset=utf-8"
    });
    let query = req.body;
    let data = require('../mock/todolist').data.data.list;
    let newData = [];
    data.forEach(val => {
        if(val[Object.keys(query)[0]].indexOf(Object.values(query)[0]) > -1){
            newData.push(val);
        }
    });
    res.end(JSON.stringify({ data: newData, time: new Date() }));
}