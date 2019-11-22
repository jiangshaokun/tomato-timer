import UIButton from './UIButton'
import React from 'react'
import TestRenderer from 'react-test-renderer';

it('传了type，类名应该包含btn-type', () => {
  const component = <UIButton text={'A button'} type={'danger'} handleClick={() => {console.log(1111)}} />

  const testRenderer = TestRenderer.create(component)

  const str = testRenderer.toJSON()
  const className = str && str.props.className
  expect(className).toMatch('btn-danger')
});
