import reactDom from "react-dom";
import Router from './routers'
// import BaseRoute
//  from './routers'
import { Provider } from 'react-redux'
import store from "./store";

reactDom.render(
    <Provider store={store} >
        <Router/>
    </Provider>
    ,
    document.getElementById('root')
)

// reactDom.render 有两个参数，第一个是要渲染的内容，第二个是要插入到页面的标签