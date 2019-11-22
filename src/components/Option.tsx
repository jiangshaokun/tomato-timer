import React from 'react'

import './Option.css'

type Props = {
  text: string
  handleClick: () => void
}

const Option:React.FC<Props> = (props) => {
  return (
    <button className="option" onClick={props.handleClick}>{props.text}</button>
  )
}

export default Option