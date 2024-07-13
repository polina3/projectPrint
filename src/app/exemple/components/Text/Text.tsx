'use client'

import {  useState } from "react"

export default function Text(){
    const [text, setText] = useState<string>()
    
    return(
        <input type="text"  onChange={e=>setText(String(e.target.value))} value={text}/>
    )
}