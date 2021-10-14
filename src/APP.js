import { Button, Input, List } from 'antd'
import React, { Component } from 'react'



export default class APP extends Component {

    constructor(props){
        super(props)
        this.state={
            iptVal:'',
            listArr:['hello','world']
        }
    }

    render() {
        return (
            <div>
                APP
                <Input 
                placeholder="请输入"
                value={this.state.iptVal}
                onChange={this.inputChange.bind(this)}
                 />

                <Button type='primary'>🚀</Button>
                <List
                    bordered
                    dataSource={this.state.listArr}
                    renderItem={item=><List.Item>{item}</List.Item>}
                >
                </List>

            </div>
        )
    }

    inputChange(e){
        console.log(e);
        this.setState({
           iptVal:e.currentTarget.value
        })
    }
}
