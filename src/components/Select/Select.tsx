import React from "react"
import style from './Select.module.scss'

type TypeProps={
    disabled?: boolean,
    onClick?: ()=>void,
    children?: React.ReactNode,
    href?: string,
    type: 'ul' | 'li' ,
    variant: 'primary' | 'underline' ,
}

function Render(props:TypeProps){
    const {type, children, variant, href ,...propsElement} = props

    switch(props.type){
        case 'ul':
            return(
                <ul className={style[variant]} {...propsElement}>{props.children}</ul>
            )
            break;
        case 'li':
            return(
                <li className={style[variant]} {...propsElement}>{props.children}</li>
            )
                break;
    }
}

export default function ul(props:TypeProps){
    return (
        <Render {...props}>{props.children}</Render>
    )
}
