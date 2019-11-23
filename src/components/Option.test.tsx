import Option from './Option'
import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import { act, Simulate } from 'react-dom/test-utils'

// 参数测试
it('文案与传参相等', () => {
  const text = '选项'
  const component = <Option text={text} handleClick={() => {}} />

  const testRenderer = TestRenderer.create(component)

  const str = testRenderer.toJSON()
  const children = str && str.children
  const result = children && children.join('')
  expect(result).toBe(text)
})

// 事件测试
it('选项回调点击响应', () => {
  const handleClick = jest.fn()
  const component = <Option text={'一个选项'} handleClick={handleClick} />
  const container = document.createElement('div')
  act(() => {
    ReactDOM.render(component, container)
  })

  const button = container.querySelector('button')

  // 测试 render 和 componentDidUpdate
  act(() => {
    button && Simulate.click(button)
  })
  expect(handleClick).toHaveBeenCalled()
})