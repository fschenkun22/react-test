import React, { Component } from 'react'

export default class APP8 extends Component {

    state={
        data : 0
    }

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={this.addNum.bind(this)} >add</button>
            </div>
        )
    }

    addNum(){
        this.setState(
            {
                data:this.state.data+1
            }
        )
    }
}
