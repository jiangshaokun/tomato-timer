import React from 'react'

import './Button.css'

interface Props {
    type?: string
    text: string
    handleClick: () => void
}

const Button: React.FC<Props> = (props) => {
    let className = 'btn'

    if (props.type) {
        className += ` btn-${props.type}`
    }

    return (
        <button onClick={props.handleClick} className={className}>{props.text}</button>
    )
}

export default Button