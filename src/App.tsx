import React, { useEffect, useState } from 'react'

import Button from './components/Button'
import Option from './components/Option'
import './App.css'
import Logo from './logo.svg'

const App: React.FC = () => {
  const [initDuration, setInitDuration] = useState(1500)
  const [duration, setDuration] = useState(1500)
  const [timer, setTimer] = useState()

  const getText = (duration: number) => {
    let minute = Math.floor(duration / 60)
    let second = duration % 60
    return `${minute} : ${second < 10 ? `0${second}` : second}`
  }

  const timerStop = () => {
    timer && clearInterval(timer)
  }

  const timerStart = () => {
    if (duration === 0) timerReset()
    if (timer) timerStop()

    setTimer(
      setInterval(() => {
        setDuration(prevDuration => {
          return prevDuration - 1
        })
      }, 1000)
    )
  }

  const timerReset = () => {
    timerStop()
    setDuration(initDuration)
  }

  const resetTimer = (minutes: number) => {
    setInitDuration(minutes * 60)
    setDuration(minutes * 60)
    timerStart()
  }

  useEffect(() => {
    if (duration === 0) {
      new Notification(`奈斯! ${getText(initDuration)} 计时结束！`, {
        icon: Logo
      })
      timerStop()
    }
  })

  const options = [
    {
      text: '番茄',
      handleOptionClick: () => {resetTimer(25)}
    },{
      text: '5分钟',
      handleOptionClick: () => {resetTimer(5)}
    },{
      text: '10分钟',
      handleOptionClick: () => {resetTimer(10)}
    },
  ]
  const optionsItem = options.map(option =>
    <Option key={option.text} text={option.text} handleOptionClick={option.handleOptionClick}/>
  )

  const buttons = [
    {
      text: '开始',
      type: 'success',
      handleClick: timerStart
    },{
      text: '暂停',
      type: 'danger',
      handleClick: timerStop
    },{
      text: '重置',
      type: 'normal',
      handleClick: timerReset
    },
  ]
  const buttonsItem = buttons.map(button =>
    <Button key={button.text} type={button.type} text={button.text} handleClick={button.handleClick}/>
  )

  return (
    <div className='app'>
      <h2 className='header'>番茄钟</h2>
      <div className='option-groups'>
        {optionsItem}
      </div>
      <h1 className='timer-text'>{getText(duration)}</h1>
      <div className='btn-groups'>
        {buttonsItem}
      </div>
    </div>
  )
}

export default App
