import React, { Component } from 'react'

export default class APP21 extends Component {
    
    state={
        msg:"hello"
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.handleChangeMsg.bind(this)}>🚀</button>
            </div>
        )
    }

    handleChangeMsg(){
        this.setState(
            {
                msg:'你好'
            }
        )
    }

    shouldComponentUpdate(nextProps,nextState){
        //nextState代表更新后的值
        //跟this.state.msg比较如果完全相等 说明数据没有更新，组件返回false
        if(this.state.msg===nextState.msg){
            console.log('前后值相等不更新，返回fales');
            return false
        }
        console.log('前后不等，返回true通知可以更新');
        return true
    }
}
