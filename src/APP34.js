import React, { Component } from 'react'
//不受控组件 尽量使用受控组件
export default class APP34 extends Component {

    state={
        msg:''
    }

    render() {
        return (
            <div>
                <input type="text" ref="ipt"/>
                <p>input值如果不被state控制，那么这个input就为不受控组件，如果获取值就要操作dom</p>
                <button onClick={this.handleClick.bind(this)} >获取input</button>

                <input type="text" value={this.state.msg} onChange={this.handleIptChange.bind(this)} />
                <h1>{this.state.msg}</h1>
                <button onClick={this.handleClick2.bind(this)}>获取input2</button>
            </div>
        )
    }

//不受控组件获取值
    handleClick(){
        console.log(this.refs.ipt.value);
    }   

//受控组件获取
    handleIptChange(e){
        this.setState({msg:e.currentTarget.value})
    }

    handleClick2(){
        console.log(this.state.msg);
    }

}
