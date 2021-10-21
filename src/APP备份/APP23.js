import React, { Component } from 'react'

class Sub extends Component{
    UNSAFE_componentWillReceiveProps(){
        console.log('更新阶段 -0- componen will recive props ');
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('更新阶段 -1- should component up date');
        return this.props.msg!==nextProps
    }
    render(){
        console.log('更新阶段 -3- render');
        return <h1>{this.props.msg}</h1>
    }
    componentDidUpdate(){
        console.log('更新阶段 -4- finished');
    }
}


export default class APP23 extends Component {

    state={
        msg:'hello'
    }

    render() {
        return (
            <div>
                <Sub msg = {this.state.msg}/>
                <button onClick={this.handleClick.bind(this)}>🚀</button>
            </div>
        )
    }

    handleClick(){
        console.log('handleClick');
        this.setState({
            msg:'你好'
        })
    }
}
