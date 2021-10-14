import React, { Component } from 'react'

export default class APP24 extends Component {
    render() {
        return (
            <div>
                <h1>卸载阶段</h1>
            </div>
        )
    }

    componentWillUnmount(){
        console.log('卸载阶段 用来清理一些数据');
    }
}
