import React, { Component } from 'react';
let list = require('components/childCust/index.js');
import './index.css';
import { BackTop } from 'antd';
import { Anchor } from 'antdModule/index.js';
import 'antdModule/Anchor/style/css.js'
const { Link } = Anchor;

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
                <div id="myAnchor">
                    <Anchor showInkInFixed="true">
                        {
                            list.custList.map((val, key) => {
                                return (
                                    <Link key={key} href={'#form' + (key + 1)} title={val.context} />
                                ) 
                            })
                        }
                    </Anchor>
                </div>
                <BackTop />
            </div>
        );
    }
}

export {custList};