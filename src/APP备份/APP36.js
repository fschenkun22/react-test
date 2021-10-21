import React, { Component } from 'react'

export default class APP36 extends Component {
    render() {
        return (
            <div>
                <h2>首页</h2>
                <hr/>
                <a href="/list">list页面</a>
                <a href="/detail">detail页面</a>
                <div className="box" style={{width:'500px',height:'500px',border:'1px solid'}} ></div>
            </div>
        )
    }
}
