import React from 'react'

import './Option.css'

type Props = {
  text: string
  handleOptionClick: () => void
}

const Option:React.FC<Props> = (props) => {
  return (
    <button className="option" onClick={props.handleOptionClick}>{props.text}</button>
  )
}

export default Option