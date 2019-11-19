import React from 'react'

import Button from './components/Button'
import Option from './components/Option'
import './App.css'

const Start = () => {
  alert('Start!')
}
const Stop = () => {
  alert('Stop!')
}
const Reset = () => {
  alert('Stop!')
}

const Timer = (min: number) => {
    alert(min)
}

let TimerText:string = '25: 00'

const App: React.FC = () => {
  return (
    <div className='app'>
      <h2 className='header'>番茄钟</h2>
      <div className='option-groups'>
        <Option text='番茄' cb={() => {Timer(25)}}/>
        <Option text='5分钟' cb={() => {Timer(5)}}/>
        <Option text='10分钟' cb={() => {Timer(10)}}/>
      </div>
      <h1 className='timer-text'>{TimerText}</h1>
      <div className='btn-groups'>
        <Button type='success' text='开始' cb={Start}/>
        <Button type='danger' text='停止' cb={Stop}/>
        <Button type='normal' text='重置' cb={Reset}/>
      </div>
    </div>
  )
}

export default App
