import Button from './Button'
import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import { act, Simulate } from 'react-dom/test-utils'

// 分支测试
it('传了type，类名应该包含btn-type', () => {
  const component = <Button text={'A button'} type={'danger'}
                            handleClick={() => {}} />

  const testRenderer = TestRenderer.create(component)

  const str = testRenderer.toJSON()
  const className = str && str.props.className
  expect(className).toMatch('btn-danger')
})
it('没传type，类名只是btn', () => {
  const component = <Button text={'A button'} handleClick={() => {}} />

  const testRenderer = TestRenderer.create(component)

  const str = testRenderer.toJSON()
  const className = str && str.props.className
  expect(className).toBe('btn')
})

// 参数测试
it('按钮文案与传参相等', () => {
  const text = '一个按钮'
  const component = <Button text={text} handleClick={() => {}} />

  const testRenderer = TestRenderer.create(component)

  const str = testRenderer.toJSON()
  const children = str && str.children
  const result = children && children.join('')
  expect(result).toBe(text)
})

// 事件测试
it('回调点击正常响应', () => {
  const handleClick = jest.fn()
  const component = <Button text={'A button'} handleClick={handleClick} />
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