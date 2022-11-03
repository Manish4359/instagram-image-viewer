import React from 'react'
import { useState } from 'react'
import './customInput.styles.css'
function CustomInput() {
    const [inputText, setInputText] = useState('')

    return (
        <div className="input-box">
            <input type="text" onChange={(e) => setInputText(e.target.value)} />
            <span style={{
                transform: inputText ? `translateY(-2.5rem)` : "",
                fontSize: inputText ? '12px' : ""
            }}>Add a comment</span>
        </div>
    )
}

export default CustomInput