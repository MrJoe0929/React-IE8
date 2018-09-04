import React, { Component } from 'react';
import { SearchBox } from 'components/Search/index.js'

let SearchOption = {
    url: 'http://localhost:8000/api/searchData',
    key: ['custName']
}

class CustomerQuery extends Component {
    render() {
        return (
            <div>
                客户查询
                <SearchBox option={SearchOption}/>
            </div>
        );
    }
}

export { CustomerQuery };