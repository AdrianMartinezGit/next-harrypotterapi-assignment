'use client'

import React from "react"

export default function CardComponent(props: {name: string, image: string, onclick: any}) {
    
    const myClick = () => {
        props.onclick();
    }
    
    return (
        <>
            <div className="bg-slate-500 w-auto h-auto" onClick={myClick}>
                <img src={props.image} alt={props.name || 'Question Mark'} className="w-72 h-96 object-cover rounded-tr-sm rounded-tl-sm hover:opacity-50 cursor-pointer"/>
                <p className="text-white text-md pl-1">{props.name}</p>
            </div>
        </>
    )
}