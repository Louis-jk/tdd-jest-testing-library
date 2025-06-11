import React from 'react'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe("Contact", () => {
    test("renders correctly", () => {
        render(<Contact />)
        const nameElement = screen.getByRole("textbox", {name: "名前"})
        expect(nameElement).toBeInTheDocument();

        const nameElement02 = screen.getByLabelText("名前")
        expect(nameElement02).toBeInTheDocument();        

        const emailElement = screen.getByRole("textbox", {name: "メールアドレス"})
        expect(emailElement).toBeInTheDocument();

        const questionsElement = screen.getByRole("combobox")
        expect(questionsElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button")
        expect(submitButtonElement).toBeInTheDocument();
    })
})
