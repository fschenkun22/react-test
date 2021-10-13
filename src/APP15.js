//子传父

import React, { Component } from 'react'



class Child extends Component {

    constructor(props) {
        super(props)
        console.log(props);
    }

    state={
        subNum:0
    }

    render() {
        return (
            <>
                <h1 style={{ border: "1px solid" }}>
                    子组件{this.state.subNum}
                    <button onClick={this.changeNum.bind(this)}>🐱‍👓</button>
                    <h6>子组件传值先触发挂载函数</h6>
                </h1>

            </>
        )
    }

    //子组件传递需要往props挂载函数
    //微信小程序用this.triggerEvent,
    changeNum(){
        this.props.changeNumFn('这是子组件的值'+this.state.subNum)
        // 触发后把函数挂载到props上
        this.setState({
            subNum:this.state.subNum+1
        })
    }

}


export default class APP13 extends Component {

    state = {
        mynum:666
    }

    render() {
        return (
            <div>
                <Child changeNumFn={this.changeNumFn.bind(this)}/>
                <div style={{border:'1px solid'}}>
                    父组件的值{this.state.mynum}
                </div>

            </div>
        )
    }

    changeNumFn(arg){
        this.setState({mynum:arg})
    }

}

