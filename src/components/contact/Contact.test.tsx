import React from 'react'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe("Contact", () => {
    test("renders correctly", () => {
        render(<Contact />)

        const h1Text = screen.getByRole("heading", {level: 1})
        expect(h1Text).toHaveTextContent("お問い合わせフォーム")

        const paragraphElement = screen.getByText("すべてのフィールドは必須項目です。")
        expect(paragraphElement).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", {name: "名前"})
        expect(nameElement).toBeInTheDocument();

        const nameElement02 = screen.getByLabelText("名前")
        expect(nameElement02).toBeInTheDocument();        

        const nameElement03 = screen.getByPlaceholderText("名前を入力してください")
        expect(nameElement03).toBeInTheDocument();

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
