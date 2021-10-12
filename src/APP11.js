import React, { Component } from 'react'


export default class APP11 extends Component {

    state = {
        arr:[
            {txt:'公告1',time:'6.25'},
            {txt:'公告2',time:'6.26'},
            {txt:'公告3',time:'6.27'},
            {txt:'公告4',time:'6.28'}   
        ]


    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.arr.map((item,index) => <li key={index}>{item.txt+item.time}</li>)
                    }
                </ul>
            </div>
        )
    }
}
