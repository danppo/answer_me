import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import ColorModeSwitcher from './ColorModeSwitcher';

// beforeEach(() => render(<Title />));

const titleValue = 'test title';

describe('renders components:', () => {
  test('self', () => {
    render(<ColorModeSwitcher />);
    const currentElement = screen.getByTestId('colorSwitcherDiv');
    expect(currentElement).toBeInTheDocument();
  });

  describe('test color switch action:', () => {
    render(<ColorModeSwitcher />);
    const button = screen.getByTestId('switcherButton');
    test('default dark ', () => {
      expect(button).toMatchSnapshot();
    });
    test('switch mode ', () => {
      fireEvent.click(button);
      expect(button).toMatchSnapshot();
    });
  });
});
