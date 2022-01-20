import { ADD_NUM } from "./actionTypes"

export const AddNumCreator = () => {
    return{
        type:ADD_NUM,//动作类型，会被派发到reducer
        value:1
    }
}