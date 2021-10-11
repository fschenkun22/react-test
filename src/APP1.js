import React, { Component } from 'react'

const msg = "hello world"
const sex = 0
const arr = ['张三','李四','王五']

export default class APP1 extends Component {
    render() {
        return (
            <div>
                <p>{msg}</p>
                <p>{sex === 0 ? "男":"女"}</p>

                <ul>
                    {
                        arr.map(
                            (item,index)=>{
                                return(
                                    <li key={index}>{item+index}</li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}
