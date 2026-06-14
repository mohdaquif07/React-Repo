import { useState } from "react"

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e){
        setColor(e.target.value)
    }
return(
<div className="color-picker-container flex flex-col items-center">
    <h1 className="m-12 text-5xl">Color Picker</h1>
    <div className="color-display w-2xs h-80 flex justify-center items-center border-4 border-amber-300 rounded-3xl mb-7 transition-all duration-250" style={{backgroundColor: color}}>
    <p className="text-gray-700">Selected Color {color}</p>
    </div>
    <label htmlFor="" className="">Select a Color</label>
    <input type="color" value={color} onChange={handleColorChange}/>
</div>
)
}

export default ColorPicker