import { use, useState, useCallback, useEffect, useRef } from "react"

function App() {
 const [length, setLength] = useState(8)
 const [numberAllowed, setNumberAllowed] = useState(false)
 const [characterAllowed, setCharacterAllowed] = useState(false)
 const [password, setPassword] = useState("")


 //useRef hook
 const passwordRef = useRef(null)

 const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "AaBbCcDdEfFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"

  if(numberAllowed) str += "0123456789"
  if(characterAllowed) str += "@#$%^&*(){}!~"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }

  setPassword(pass)

 }, [length, numberAllowed, characterAllowed, setPassword])

const copypasstoclip = useCallback(()=>{
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(1,7);
  window.navigator.clipboard.writeText(password)
}, [password])

 useEffect(()=>{
  passwordGenerator()
 }, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 mt-4 text-orange-800 bg-gray-700">
    <h1 className="text-4xl text-center text-white mb-2">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-gray-300"
        placeholder="password"
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copypasstoclip}
        className="bg-gray-800 py-2 px-2 text-white font-bold outline-none">COPY</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={characterAllowed}
          id='characterInput'
          onChange={()=>{
            setCharacterAllowed((prev) => !prev);
            
          }}
          />
          <label>Characters</label>
        </div>
      
      </div>
    </div>
    </>
  )
}

export default App
