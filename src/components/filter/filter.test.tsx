import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import Filter from './filter';

const resetQuestions = () => {};

const categories = ['one','two','three'];
const selectedCats: string[] = [];
const noQuestionsLeftCats: string[] = [];
const setSelectedCats = jest.fn();
const onCloseModal = jest.fn();

beforeEach(() => render(<Filter 
    categories={categories}
    selectedCats={selectedCats}
    setSelectedCats={setSelectedCats}
    onCloseModal={onCloseModal}
    noQuestionsLeftCats={noQuestionsLeftCats} />));

describe('renders components: ', () => {
  test('self', () => {
    const currentElement = screen.getByTestId('FilterButton');
    expect(currentElement).toBeInTheDocument();
  });

  // test('child elements ', () => {
  //   const menuButton = screen.getByTestId('menuButton');
  //   expect(menuButton).toBeInTheDocument();
  //   const title = screen.getByTestId('title');
  //   expect(title).toBeInTheDocument();
  //   const colorSwitcher = screen.getByTestId('colorSwitcher');
  //   expect(colorSwitcher).toBeInTheDocument();
  // });
});
