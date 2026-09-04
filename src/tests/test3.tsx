import { useEffect, useRef, useState } from "react"


const TestRef = () => {

    const token = localStorage.getItem("accessLoginToken");
    const isLogined = !!token;


    const count = useRef(0)
    const [state, setState] = useState(0);





    const refCount = () => {
        count.current += 1;
    }
    const stateCount = () => {
        setState(state + 1);
    }
    return (<div>
        <div><button onClick={refCount}>ref</button></div>

        <button onClick={stateCount}>state</button>

        <div>{count.current}</div>
        <div>{state}</div>
    </div>)
}
export default TestRef;