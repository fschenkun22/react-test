//孙子老子一起传

import React, { Component } from 'react'
import PropTypes from "prop-types"//context传值前需要引入，因为传值时候需要验证数据类型

//孙子
class Sunzi extends Component{

    //🚩3 孙子组件使用时候 先限制传入值的类型
    //📍vscode无提示，注意contextTypes ,带s 不带会报找不到变量错误
    static contextTypes = {
        publicNum:PropTypes.number
    }

    render(){
        return(
            <h1>这是孙子得到的公共数据publicnum的值{this.context.publicNum}</h1>
        )
    }
}

//子组件
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
                <div style={{ border: "1px solid" }}>
                    子组件{this.state.subNum}
                    <button onClick={this.changeNum.bind(this)}>🐱‍👓</button>
                    <h6>子组件传值先触发挂载函数</h6>
                </div>
                <Sunzi/>

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

//父组件
export default class APP13 extends Component {

    state = {
        mynum:666
    }

    //🚩1 在父组件定义跨组件传值的数据类型
    static childContextTypes = {
        publicNum:PropTypes.number
    }

    //🚩2 给上下文传入数据及值
    getChildContext(){
        return{
            publicNum:8888
        }
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

