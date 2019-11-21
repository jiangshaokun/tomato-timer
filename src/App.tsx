import React, {useState} from 'react'

import Button from './components/Button'
import Option from './components/Option'
import './App.css'

const App: React.FC = () => {
  const [initDuration, setInitDuration] = useState(1500)
  const [duration, setDuration] = useState(1500)
  const [timer, setTimer] = useState()

  const timerStart = () => {
    if (timer) return

    setTimer(setInterval(() => {
      setDuration(prevDuration => {
        return prevDuration - 1
      })
    }, 1000))
  }

  const timerStop = () => {
    if (timer) {
      setTimer(clearInterval(timer))
    }
  }
  const timerReset = () => {
    if (timer) {
      setTimer(clearInterval(timer))
    }

    setDuration(initDuration)
  }

  const resetTimer = (minutes: number) => {
    if (timer) {
      setTimer(clearInterval(timer))
    }

    setInitDuration(minutes * 60)
    setDuration(minutes * 60)

    timerStart()
  }

  /**
   * 获取时间文本
   * @param duration 时长，单位：秒
   */
  const getText = (duration: number) => {
    let minute = Math.floor(duration / 60)
    let second = duration % 60
    return `${minute} : ${second < 10 ? `0${second}` : second}`
  }

  return (
    <div className='app'>
      <h2 className='header'>番茄钟</h2>
      <div className='option-groups'>
        <Option text='番茄' handleOptionClick={() => {resetTimer(25)}}/>
        <Option text='5分钟' handleOptionClick={() => {resetTimer(5)}}/>
        <Option text='10分钟' handleOptionClick={() => {resetTimer(10)}}/>
      </div>
      <h1 className='timer-text'>{getText(duration)}</h1>
      <div className='btn-groups'>
        <Button type='success' text='开始' handleClick={timerStart}/>
        <Button type='danger' text='停止' handleClick={timerStop}/>
        <Button type='normal' text='重置' handleClick={timerReset}/>
      </div>
    </div>
  )
}

export default App
