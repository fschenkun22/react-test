import React, { Component } from 'react'

const sex = 0
const arr = ['张三','李四','王五','赵六']

export default class APP4 extends Component {

    state={
        msg : ' hello '
    }
    //state 可以简写

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <h1>APP6</h1>
                <h2>{sex === 0 ? "男":"女"}</h2>
                <ul>
                    {
                        arr.map((item,index)=><li key={index}>{item+index}</li>)
                    }
                </ul>
                <button onClick={()=>this.changeMsg()}>原理是箭头函数内没有上下文，默认指向了所在上一层的上下文，正好上层上下文里面含有changeMsg</button>
                    <br/>
                <button onClick={this.changeMsg2}>?这地方原理不明</button>

            </div>
        )
    }

    changeMsg(){
        console.log('change');
        this.setState(
            {
                msg:"你好世界,这地方是有延迟的，数据是异步修改"
            },()=>{console.log(this.state.msg+'这是回调函数,在数据更新之后自动调用');}
        )
        console.log(this.state.msg+'这里马上读取state.msg');
    }

    changeMsg2 = () =>{
        console.log('change2');
    }
}
