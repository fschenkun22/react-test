//父传子

import React, { Component } from 'react'



class Child extends Component {

    constructor(props){
        super(props)
        console.log(props);
    }

    render(){
        return (
            <>
            <h1>子组件</h1>
            <p>接收到的值{this.props.num} </p>
            </>
        )
    }
}


export default class APP13 extends Component {

    state={
        num:666
    }

    render() {
        return (
            <div>
                <Child num={this.state.num} />
                {/* 传值给子组件 父组件更新子组件会同时更新*/}
                <button onClick={this.handleClk}>🚀父组件</button>
            </div>
        )
    }

    handleClk=()=>{
        console.log('handleClk');
        this.setState({
            num:this.state.num+1
        })
    }

}

