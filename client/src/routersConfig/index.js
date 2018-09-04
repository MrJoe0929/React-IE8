// import CustomerManagement from 'pages/CustomerManagement/index.js';
// import CustomerQuery from 'pages/CustomerQuery/index.js';
let CustomerManagement = require('pages/CustomerManagement/index.js');
let CustomerQuery = require('pages/CustomerQuery/index.js');
let newCust = require('pages/newCust/index.js');

let Customer1 = {
    component: CustomerManagement.CustomerManagement,
    to: '/CustomerManagement',
    path: '/CustomerManagement',
    context: '客户管理'
}
let Customer2 = {
    component: CustomerQuery.CustomerQuery,
    to: '/CustomerQuery',
    path: '/CustomerQuery',
    context: '客户查询'
}
let Customer3 = {
    component: newCust.custList,
    to: '/newCust',
    path: '/newCust',
    context: '客户新建'
}

let RoutersConfig = [
    Customer1,
    Customer2,
    Customer3
]

export {RoutersConfig}