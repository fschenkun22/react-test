import React, { Component } from 'react'

const msg = "hello world"
const sex = 0
const arr = ['张三','李四','王五','赵六']

export default class APP4 extends Component {
    render() {
        return (
            <div>
                <h1>{msg}</h1>
                <h2>{sex === 0 ? "男":"女"}</h2>
                <ul>
                    {
                        // arr.map(
                        //     (item,index)=>{
                        //         return(
                        //             <li key={index}>{item+index}</li>
                        //         )
                        //     }
                        // )
                        arr.map((item,index)=><li key={index}>{item+index}</li>)
                    }
                </ul>
            </div>
        )
    }
}
