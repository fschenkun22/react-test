import React, { Component } from 'react'

export default class APP10 extends Component {

    state = {
        msg : '双向绑定'
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <input type='text' value={this.state.msg} onChange={this.handleOnchage}></input>
            </div>
        )
    }

    handleOnchage = (e) => {
        console.log(e.target.value);
        this.setState({
            msg:e.target.value
        })
    }
}
