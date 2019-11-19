import React from 'react'
import './Option.css'

type Props = {
  text: string
  cb: () => void
}

const Option:React.FC<Props> = (props) => {
  return (
    <button className="option" onClick={props.cb}>{props.text}</button>
  )
}

export default Option