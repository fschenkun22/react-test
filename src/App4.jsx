import { Button } from 'antd'
import React, { useState } from 'react'


function useCount(initialValue){

    const[count,setCount] = useState(initialValue)

    return[
        count,
        ()=>{setCount(count+1)}
    ]
}


export default function App4() {

    console.log(useCount(0));
    const [count, addCount] = useCount(0)

    return (
        <div>
            Your count:{count}
            <Button onClick={()=>addCount()}>Add</Button>
        </div>
    )
}
