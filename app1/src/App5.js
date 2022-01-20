import React, { Component } from 'react'
import { Map } from 'immutable'

export default class App5 extends Component {

    state={
        textValue:''
    }

    handleInput=()=>{
        return(e)=>{
            console.log(e.target.value)
            this.setState({
                textValue:e.target.value
            })
        }
    }

    render() {

        let x = Map({
            a:0,
            b:1,
            c:{
                ccc:100
            }
        })

        let y = x

        x.set('a',100)


        console.log('debug1:','x is:',x,'y is:',y);



        return (
            <div>
                <h1>APP5  FORM</h1>
                <input
                type="text"
                value={this.state.textValue}
                onChange={this.handleInput()}
                />

            </div>  
        )
    }
}
