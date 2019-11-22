import React from 'react'

import './UIOption.css'

type Props = {
  text: string
  handleOptionClick: () => void
}

const UIOption:React.FC<Props> = (props) => {
  return (
    <button className="option" onClick={props.handleOptionClick}>{props.text}</button>
  )
}

export default UIOption