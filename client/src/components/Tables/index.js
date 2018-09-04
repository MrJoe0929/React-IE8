import React, { Component } from 'react';
import { Table, Progress } from 'antd';
const columns = [{
    title: '客户名称',
    dataIndex: 'custName',
    key: 'custName',
}, {
    title: '统一社会信用代码/证件号码',
    dataIndex: 'ID',
    key: 'ID',
}, {
    title: '类型',
    dataIndex: 'custType',
    key: 'custType',
}, {
    title: '资料完整度',
    dataIndex: 'progress',
    key: 'progress',
    render: number => <Progress percent={number} />
}, {
    title: '操作',
    key: 'action',
    render: (data) => {
        let DeleteFn = () => {
            console.log('删除:' + data.key);
        }
        return <Delete fn={DeleteFn}/>
    }
}];

class Delete extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        let {fn} = this.props;
        return (
            <span>
                <a href="javascript:;" onClick={fn}>Delete</a>
            </span>
        )
        
    }
}

class Tables extends Component {
    constructor(props) {
        super(props);
    }
    onChange = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    }

    render() {
        let { data } = this.props;
        return (
            <div><Table columns={columns} dataSource={data} onChange={this.onChange}/></div>
        );
    }

}
export { Tables }