import React from 'react'
import './Button.css'

type Props = {
    type?: string
    text: string
    cb: () => void
}

const Button: React.FC<Props> = (props) => {
    let className = 'btn'

    if (props.type) {
        className += ` btn-${props.type}`
    }

    return (
        <button onClick={props.cb} className={className}>{props.text}</button>
    )
}

export default Button