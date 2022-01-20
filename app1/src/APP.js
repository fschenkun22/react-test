import { Button, Input, List } from 'antd'
import store from './store'


import React, { Component } from 'react'

export default class App extends Component {

    constructor(props){
        super(props)
        this.state= store.getState()
        store.subscribe(this.storeChange.bind(this))//必须订阅变化
    }

    //订阅处理函数，把state设置成store里的state
    storeChange(){
        this.setState(store.getState())
    }

    render() {
        return (
            <div>
                <Input 
                placeholder="请输入"
                value={this.state.iptVal}
                onChange={this.inputChange}
                 />

                <Button 
                type='primary'
                onClick={this.addItemFn}
                >🚀</Button>
                <List
                    bordered
                    dataSource={this.state.listArr}
                    renderItem={item=><List.Item>{item}</List.Item>}
                >
                </List>

            </div>
        )
    }


    inputChange = (e) => {
        console.log(e.currentTarget.value);
        const action={
            type:"changeInput",
            value:e.currentTarget.value
        }
        store.dispatch(action)
    }

    addItemFn=()=>{
        console.log('add item fn');
        store.dispatch({
            type:'addItemfn'
        })
    }

}
