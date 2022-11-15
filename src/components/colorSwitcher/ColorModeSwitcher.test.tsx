import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import ColorModeSwitcher from './ColorModeSwitcher';

describe('renders components:', () => {
  test('self', () => {
    render(<ColorModeSwitcher />);
    const currentElement = screen.getByTestId('colorSwitcher');
    expect(currentElement).toBeInTheDocument();
  });

});