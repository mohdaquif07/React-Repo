import { useState } from "react"

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = ()=>{
        setName("aquif")
    }

    const incrementAge = ()=>{
        setAge(age+1)
    }

    const toggleEmployedStatus = ()=>{
        setIsEmployed(!isEmployed);

    }
    return(
        <div>
            <p>Name : {name}</p>
            <button className="p-1 bg-red-400 rounded-xl" onClick={updateName}>Set Name</button>
            <p>Age : {age}</p>
            <button className="p-1 bg-red-400 rounded-xl" onClick={incrementAge}>Increment</button>
            <p>isEmployed : {isEmployed? "Yes" : "No"}</p>
            <button className="p-1 bg-red-400 rounded-xl" onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    )
}

export default MyComponent