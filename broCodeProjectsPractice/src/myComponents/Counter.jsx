import { useState } from "react"

function Counter(){
const [count, setCount] = useState(0);
const increment = ()=>{
    setCount(count + 1)
}
const decrement = ()=>{
    setCount(count - 1)

}
const reset = ()=>{
    setCount(0)
}

return(
    <div className="counter-container text-center font-sans">
        <p className="count-display text-5xl mt-0 mb-5">{count}</p>
        <button className="counter-button w-40 h-12 text-2xl font-bold mx-1 bg-blue-300 border-none rounded-sm cursor-pointer hover:bg-blue-400" onClick={decrement}>Decrement</button>
        <button className="counter-button w-40 h-12 text-2xl font-bold mx-1 bg-blue-300 border-none rounded-sm cursor-pointer hover:bg-blue-400" onClick={reset}>Reset</button>
        <button className="counter-button w-40 h-12 text-2xl font-bold mx-1 bg-blue-300 border-none rounded-sm cursor-pointer hover:bg-blue-400" onClick={increment}>Increment</button>
    </div>
)
}


export default Counter