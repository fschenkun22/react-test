import React, { Component } from 'react'


export default class APP12 extends Component {

    state = {
        arr:["新闻","体育","知识"],
        num:0
    }

    render() {
        return (
            <div className="tabs">
                <ul>
                    {
                        this.state.arr.map(
                            (item,index)=>(
                                <li className={this.state.num === index ? "active" : ""}//用num来判断当前点击的是哪个index，然后把index传入，传入后setState num被对应置位，达到点哪个 哪个就active的效果
                                key={index}
                                onClick={this.handleClickFn.bind(this,index)}
                                >
                                    {item}
                                </li>
                            )
                        )
                    }
                </ul>
                
            </div>
        )
    }

    handleClickFn(index){
        console.log(index);
        this.setState({
            num : index
        })
    }
}
