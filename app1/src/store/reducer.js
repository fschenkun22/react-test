//定义默认状态
//导出箭头函数

import { ADD_NUM } from "./actionTypes";

//数据默认的初始值
const defaultState = {
    iptVal:'',
    listArr:['hello','world'],
    num:100
}

 const reducer = (state=defaultState,action)=>{

    let newState = JSON.parse(JSON.stringify(state)) //深拷贝只能拷贝一层，多层要加循环!!!!!!!!!!

    console.log(action);
    switch (action.type) {
        case 'changeInput':
            newState.iptVal = action.value
            console.log('change input');
            break
    
        case 'addItemfn':
            console.log('add item fn reducer')
            newState.listArr.push(newState.iptVal)
            newState.iptVal=""
            break

        case ADD_NUM:
            newState.num += action.value
            break

        default:break
           
    }
    
    return newState
    
}

export default reducer