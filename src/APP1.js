import React, { Component } from 'react'
import { AddNumCreator } from './store/actionCreators'
import { ADD_NUM } from './store/actionTypes'

import { connect } from 'react-redux'

class App1 extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.num}</h2>
                <button onClick={this.props.addNumFn}> 📈 触发addNumFn动作</button>
                {/* 派发使用this.props.调用 */}
            </div>
        )
    }


}

//数据通过connect直接映射到props 使用时 props.调用
const mapStateToProps = (state) => {
    return {
        num: state.num
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNumFn() {
            console.log('动作触发，调用actionCreator返回派发的动作');
            dispatch(AddNumCreator())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App1)