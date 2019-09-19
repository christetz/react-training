import React from 'react';
import { mount } from 'enzyme';
import { MainPage } from '../../src/pages/MainPage';

describe('Component Tests', () => {
  it('Main Page should contain a headline', () => {
    const sut = mount(<MainPage />);
    const actual = sut.find('[data-test-id="headline"]');
    expect(actual.text()).toBe('Hello World');
  });
});
