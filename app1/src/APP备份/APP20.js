import React, { Component } from 'react'

//挂载阶段
export default class APP20 extends Component {

    constructor(props){
        super(props)
        console.log('挂载阶段-1-constructor 用来构建');
    }

    UNSAFE_componentWillMount(){
        console.log('挂载阶段-2- componentWillMount-准备渲染');
    }

    render() {
        console.log('挂载阶段-3-render- 渲染阶段');
        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }

    componentDidMount(){
        console.log('挂载阶段-4-componentDidMount-渲染完毕');
    }

}
