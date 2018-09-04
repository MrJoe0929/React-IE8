import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import axios from 'axios';

import './index.css';

class SearchIcon extends Component {
    render() {
        return <Icon type="search" style={{ fontSize: 14, color: '#fff' }} />
    }
}

class ObjectDom extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { data, mesg } = this.props;
        return (
            <ul className={data.count > 0 ? "searchList searchList-show" : "searchList searchList-hide"} >
                {
                    data.data.data && data.data.data.length > 0 ?
                        data.data.data.map((val, key) => {
                            let custN = val.custName.split(data.key);
                            return (
                                <li key={key}>
                                    <h2>{custN[0]}<b>{data.key}</b>{custN[1]}</h2>
                                    <p>法人：{val.legalPerson} 客户类型: {val.custType} 统一社会信用代码/证件号码：{val.ID}</p>
                                </li>
                            )
                        }) :
                        mesg
                }
            </ul>
        )
    }
}

class SearchBox extends Component {
    constructor(props) {
        super(props);
        let { option } = this.props;
        this.state = {
            value: '', // 查找的选项
            listData: {}, // 返回的数据
            searchMesg: '', // 提示信息
            count: 0, // 搜索次数
            change: (e) => {
                this.setState({
                    value: e.target.value
                })
            },
            pressEnter: () => {
                if (!this.state.value) {
                    this.setState({
                        listData: [],
                        searchMesg: '',
                    })
                    return;
                }
                axios({
                    method: 'post',
                    url: 'http://localhost:8000/api/searchData',
                    data: {
                        custName: this.state.value
                    }
                }).then(res => {
                    this.setState({
                        listData: res.data,
                        searchMesg: this.state.value,
                        count: this.state.count + 1
                    })
                }).catch(res => {
                    console.error(res);
                })
            },
            placeholder: '请输入客户名称'
        }
    }

    render() {
        let { value, change, pressEnter, placeholder, listData, searchMesg, count } = this.state;
        return (
            <div id="searchBox">
                <Input placeholder={placeholder} addonAfter={<SearchIcon />} onChange={change} value={value} onPressEnter={pressEnter} />
                <ObjectDom data={{ data: listData, key: searchMesg, count }} mesg='没有查询到您要的资料' />
            </div>
        )

    }
}

export { SearchBox }
