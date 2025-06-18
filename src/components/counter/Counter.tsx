import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

const Counter = () => {    
    const [amount, setAmount] = useState(0)
    const { count, increment } = useCounter({ initialCount: 10 })

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt(e.target.value) || 0)
    }

 
    return (
        <div>
            <h1>{count}</h1>
            <div style={{ marginBottom: "10px" }}>
                <button onClick={increment}>Increment</button>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "150px", margin: "auto" }}>
                <input type="number" name="amount" value={amount} onChange={handleChange} placeholder="Enter the amount" style={{ width: "90%", textAlign: "right", padding: "5px", marginBottom: "5px" }} />
                {/* <button onClick={incrementByAmount} style={{ width: "100%" }}>Increment by amount</button> */}
            </div>
        </div>
    )
}

export default Counter