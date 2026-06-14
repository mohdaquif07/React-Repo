import { useState } from "react"

function OnClick(){
const [name, setName] = useState("Guest")
const [quantity, setQuantity] = useState(1)
const [payment, setPayment] = useState("Mastercard")
const [shipping, setShipping] = useState("Delivery")

function handleEventChange(event){
    setName(event.target.value)
}

function handleQuantityChange(e){
    setQuantity(e.target.value)
}

function handlePaymentMethod(e){
    setPayment(e.target.value)
}

function handleShippingChange(e){
    setShipping(e.target.value)
}
    return(
    <div>
        <input value={name} placeholder="Enter Name" onChange={handleEventChange}/>
        <p>Name : {name}</p>
        <input type="number" value={quantity} placeholder="Enter quantity" onChange={handleQuantityChange}/>
        <p>Quantity: {quantity}</p>

        <select defaultValue={payment} name="" id="" onChange={handlePaymentMethod}>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
        </select>
        <p>Method : {payment}</p>

        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
        <label htmlFor="">Delivery</label>
        <br />
        <input type="radio" value="Pickup" checked={shipping === "Pickup"} onChange={handleShippingChange}/>
        <label htmlFor="">Pickup</label>

        <p>Shipping : {shipping}</p>

    </div>
)
}

export default OnClick