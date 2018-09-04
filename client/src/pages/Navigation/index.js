import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import {RoutersConfig} from '../../routersConfig/index.js';

let a = require('../errorPages/404.js');

class Navigation extends Component {
    constructor(props){
        super(props); 
        this.state = {
            Links: () => RoutersConfig.map((val, key) => {
                // 导航
                return (
                    <Link key={key} to={val.to}>{val.context}</Link>
                )
            }),
            Router: () => RoutersConfig.map((val, key) => {
                // 路由内容
                return (
                    <Route key={key} path={val.path} component={val.component}/>
                )
            })
        }
    }
    render() {
        let Links = this.state.Links();
        let Router = this.state.Router();
        return (
            <div>
                {Links}
                <Switch>
                    {Router}
                    <Route path="/" render={() => <Redirect to="/CustomerManagement"/> }/>
                    <Route path='/error_404' component={a.page_404}/>
                    <Route path="*" render={() => <Redirect to="/error_404"/> }/>
                </Switch>
            </div>
        );
    }
}

export {Navigation};