import React, { Component } from 'react'


export default class APP22 extends Component {

    state={
        msg:'hello world'
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('更新阶段-1- shouldComponentUpdate-是否可更新');
        return this.state.msg!==nextState//这里简写，如果不相等返回true组件就更新了
    }

    render() {
        console.log('更新阶段-3- render- 开始渲染');
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.setState({msg:'你好'})}>🚀</button>
            </div>
        )
    }

    componentDidUpdate(){
        console.log('更新阶段-4- componentDidUpdate- 组件完成更新');
    }
}
