let { Firstform } = require('./first/index.js');
let { Secondform } = require('./second/index.js');
let { Thirdform } = require('./third/index.js');
let { Fourthform } = require('./fourth/index.js');
let { Fifthform } = require('./fifth/index.js');

let first = {
    component: Firstform,
    context: '第一个表单'
}
let second = {
    component: Secondform,
    context: '第二个表单'
}
let third = {
    component: Thirdform,
    context: '第三个表单'
}
let fourth = {
    component: Fourthform,
    context: '第四个表单'
}
let fifth = {
    component: Fifthform,
    context: '第五个表单'
}


let custList = [
    first,
    second,
    third,
    fourth,
    fifth
]

export {custList};