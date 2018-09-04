let Mock = require('mockjs');
let Random = Mock.Random;
Random.extend({
    constellation: function () {
        var constellations = ["法人", "自然人"];
        return this.pick(constellations);
    },
    custName: function () {
        var custNames = ["广联达股份有限公司", "北京广联达小贷公司", "百度集团", "阿里巴巴集团", "腾讯集团", "阿里巴巴支付", "布本智能有限公司", "瑞友科技股份公司", "链家", "我爱我家", "安客居"];
        return this.pick(custNames);
    },
    digits: (num) => {
        //获取指定位数的随机数
        return Math.floor((Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, num - 1));
    }
})
var data = Mock.mock({
    'code': 0,
    'data': {
        'list|45': [{
            'key|+1': 10000,
            'legalPerson': () => Random.cname(),
            'custName': () => Random.custName(),
            "ID": () => Random.digits(16) + Random.word(2),
            "custType": () => Random.constellation(),
            "progress": () => Math.floor(Math.random() * (100 - 0) + 0)
        }]
    },
    'message': '操作成功',
    'systemDate': new Date().getTime()
});

module.exports.data = data;