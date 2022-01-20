//父传子 类型检查

import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Child extends Component {

    //在这里限制传入类型，类型错误会报warning
    static propTypes = {
        num:PropTypes.number.isRequired
    }

    static defaultProps = {
        num : 123
        //如果不传值 默认123
    }

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
        num:'d'
    }

    render() {
        return (
            <div>
                <Child num={this.state.num} />
                {/* <Child/>  如果不传值 默认123*/}
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

