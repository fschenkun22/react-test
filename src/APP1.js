import React, { Component } from 'react'
import store from './store'
import { AddNumCreator } from './store/actionCreators'
import { ADD_NUM } from './store/actionTypes'
export default class App1 extends Component {

    constructor(props){
        super(props)
        this.state={
            num :0
        }

        store.subscribe(this.storeChange.bind(this))
    }

    storeChange(){
        this.setState(store.getState())
    }


    render() {
        return (
            <div>
                <h2>{this.state.num}</h2>
                <button onClick={this.addNumFn.bind(this)}> 📈 触发addNumFn动作</button>
            </div>
        )
    }

    addNumFn(){
        console.log('动作触发，调用actionCreator返回派发的动作');
        store.dispatch(AddNumCreator())
    }
}
