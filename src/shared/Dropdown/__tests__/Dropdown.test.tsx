/**
//  * @jest-environment jsdom - для использования window в тестах
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from '../Dropdown';

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper.find('#button')).toBeDefined();
    // {/* console.log(wrapper.find('div.container').debug()) */}
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  });

  test('should render (snapshot)', () => {
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
