import {useState} from 'react'

//函数组件没有生命周期，没有状态，没有this
export default function App2() {

// const[变量名，修改变量的方法] = useState(变量初始值)
    const [num ,setNum] = useState(0)


    function handleClick(){
        setNum(num+1)
    }

    return (
        <div>
            app2
            <p>{num}</p>
            <button
            onClick={
                ()=>setNum(num+1)
            }
            >💡</button>


            <button
            onClick={handleClick}
            >✨</button>
        </div>
    )


}
