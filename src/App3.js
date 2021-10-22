import { useState ,useEffect} from 'react'

export default function App3() {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    function handelNum() {
        setNum(num + 1)
    }

    function handleNum2(){
        setNum2(num2+1)
    }

    useEffect(() => {
        console.log('更新了');
        return () => {
            console.log('卸载了');
        }
    }, [num])//监听num的改变，不写中括号 自动检测全部

    return (
        <div>
            App3
            <button
                onClick={handelNum}
            >🎈</button>

            <button
            onClick={handleNum2}
            >🎃</button>

            <h1>{num}</h1>
            <h1>{num2}</h1>

        </div>
    )
}
