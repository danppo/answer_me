import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import QuestionPage from './questionPage';

beforeEach(() => render(<QuestionPage />));

describe('renders components: ', () => {
  test('self', () => {
    const currentElement = screen.getByTestId('QuestionPage');
    expect(currentElement).toBeInTheDocument();
  });

  test('child elements ', () => {
    const headerElement = screen.getByTestId('Header');
    expect(headerElement).toBeInTheDocument();
    const questionElement = screen.getByTestId('Questions');
    expect(questionElement).toBeInTheDocument();
    const footerElement = screen.getByTestId('Footer');
    expect(footerElement).toBeInTheDocument();
  });
});

describe('test state intergration: ', () => {
  describe('reset: ', () => {
    test('dont unless started', () => {
      const resetButton = screen.getByTestId('menuButton-reset');
      const menuButton = screen.getByTestId('menuButton');
      fireEvent.click(menuButton);

      const QuestionCardContent = screen.getByTestId('questionCardContent');

      fireEvent.click(resetButton);

      // expect(QuestionCardContent).toHaveTextContent('The questions and filters have been reset');
      expect(QuestionCardContent).toHaveTextContent('Press the button for the first question');
    });

    test('game started', () => {
      const resetButton = screen.getByTestId('menuButton-reset');
      const menuButton = screen.getByTestId('menuButton');
      const nextQuestionButton = screen.getByTestId('nextQuestion');
      fireEvent.click(nextQuestionButton);

      const QuestionCardContent = screen.getByTestId('questionCardContent');
      expect(QuestionCardContent).not.toHaveTextContent(
        'The questions and filters have been reset'
      );
      expect(QuestionCardContent).not.toHaveTextContent('Press the button for the first question');

      fireEvent.click(menuButton);
      fireEvent.click(resetButton);

      expect(QuestionCardContent).toHaveTextContent('The questions and filters have been reset');
    });
  });
  describe('skip: ', () => {
    test('skip', () => {
      const nextQuestionButton = screen.getByTestId('nextQuestion');
      fireEvent.click(nextQuestionButton);

      const skipButton = screen.getByTestId('skipButton');
      fireEvent.click(skipButton);

      const historyButton = screen.getByTestId('historyButton');
      fireEvent.click(historyButton);

      const questionCards = screen.getAllByTestId('historyQuestionCard');
      expect(questionCards).toHaveLength(1);

      const qCardText = screen.getAllByTestId('questionCardContent');
      console.log(qCardText[0]);

      const qCardAnswerNow = screen.getAllByTestId('answeredNow');
      expect(qCardText[0]).toHaveStyle('color: var(--chakra-colors-red-400)');
      fireEvent.click(qCardAnswerNow[0]);
      expect(qCardText[0]).toHaveStyle('color: var(--chakra-colors-chakra-body-text)');
    });
  });
});
