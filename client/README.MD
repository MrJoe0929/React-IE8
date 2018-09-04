## 开发坏境启动

1. `npm install`
2. `npm start`
3. 浏览器打开[http://localhost:8080](http://localhost:8080)

备注：如果要在局域网访问，请修改`package.json`-`start`命令，增加`--public 192.168.x.x`，后面为你的局域网`ip`。


## 生产坏境部署

1. `npm run build`
2. 拷贝dist文件夹至服务器即可


## 使用规则
1. 因系统需要兼容IE8及以上，所以有些antd的方法是不可用的(React和antd的版本很低);
2. 模块创建完毕后，需以 import {} 的形式抛出,(在IE中default为关键字不可以使用);
    import { a, b };
3. 引入模块的时候需要以require()引入
    ex: let a = require('index.js');
        // 使用时
            a.a / a.b
        let { a, b } = require('index.js');
        // 使用时
            a / b

