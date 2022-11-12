import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import QuestionPage from "./questionPage"

beforeEach(() => render(<QuestionPage />));

describe('renders components: ',() => {
  test("self", () => {
    const currentElement = screen.getByTestId('QuestionPage')
    expect(currentElement).toBeInTheDocument()
  });
  
  test("child elements ", () => {
    const headerElement = screen.getByTestId('Header')
    expect(headerElement).toBeInTheDocument()
    const questionElement = screen.getByTestId('Questions')
    expect(questionElement).toBeInTheDocument()
    const footerElement = screen.getByTestId('Footer')
    expect(footerElement).toBeInTheDocument()
  });
});
