import reactDom from "react-dom";
import App from "./App";
// import BaseRoute
//  from './routers'

reactDom.render(
   <App/>,
    document.getElementById('root')
)

// reactDom.render 有两个参数，第一个是要渲染的内容，第二个是要插入到页面的标签