import React, { Component } from 'react'

export default class APP9 extends Component {

    state={
        arr:["刘备","关羽","张飞"]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.arr.map(
                            (item,index)=><li key={index}>{item}</li>
                        )
                    }
                </ul>
                <button onClick={this.handleChangeArr}>🚀</button>
            </div>
        )
    }

    handleChangeArr = () =>{
        console.log('handle change arr');
        //setState里面 不允许运算
        let tempArr = JSON.parse(JSON.stringify(this.state.arr))
        //数据只有深拷贝一次之后才能真正被修改📍
        tempArr.splice(2,1,'🌏')
        console.log(tempArr);

        // setState 后面用（）里面传一组对象{}🎈🌏
        this.setState({
            arr:tempArr
        })
    }
}
