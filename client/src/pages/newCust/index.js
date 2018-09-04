import React, { Component } from 'react';
let list = require('components/childCust/index.js');
import './index.css';
import { BackTop } from 'antd';

class custList extends Component {
    constructor(props){
        super(props); 
    }
    render() {
        return (
            <div>
                {
                    list.custList.map((val, key) => {
                        let Coms = val.component;
                        return (
                            <div key={key} className="form" id={'form' + (key + 1)}>
                                <h3>{val.context}</h3>
                                <Coms/>
                            </div>
                        ) 
                    })
                    
                }
                <div id="Anchor">
                    {
                        list.custList.map((val, key) => {
                            return (
                                <a key={key} href={'#form' + (key + 1)}>{val.context}</a>
                            ) 
                        })
                    }
                </div>
                <BackTop />
            </div>
        );
    }
}

export {custList};