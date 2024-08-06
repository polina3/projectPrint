import Link from "next/link";
import React from "react"
import style from './Button.module.scss'

type TypeProps={
    disabled?: boolean,
    onClick?: ()=>void,
    children?: React.ReactNode,
    href?: string,
    type: 'button' | 'link' | 'submit',
    variant: 'primary' | 'default' | 'outline' ,
}

// () - что мы передаем
// => void - что мы не чего не отдаем 

function Render(props:TypeProps){
    const {type, children, variant, href ,...propsElement} = props

    switch(props.type){
        case 'button':
            return(
                <button className={style[variant]} type="button" {...propsElement}>{props.children}</button>
            )
            break;
        case 'link':
            return(
                <Link href={props.href || '/'} className={style[variant]} {...propsElement}>{props.children}</Link>
            )
            break;
        case 'submit': 
            return(
                <button className={style[variant]} type="submit" {...propsElement}>{props.children}</button>
            )
            break;
    }
}

export default function Button(props:TypeProps){
    return (
        <Render {...props}>{props.children}</Render>
    )
}
