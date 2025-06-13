import userEvent from '@testing-library/user-event'
import Counter from './Counter'
import { render, screen } from '@testing-library/react'

describe("Counter", () => {
    test("renders correctly", () => {
        render(<Counter />)

        const counterElement = screen.getByRole("heading")
        expect(counterElement).toBeInTheDocument()

        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        })
        expect(incrementButton).toBeInTheDocument()
    })

    test("renders a count of 0", () => {
        render(<Counter />)

        const counterElement = screen.getByRole("heading")
        expect(counterElement).toHaveTextContent("0")
    })

    test("renders a count of 1 after clicking the increment button", async () => {
        const user = userEvent.setup()
        render(<Counter />)

        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        })

        await user.click(incrementButton)
        const counterElement = screen.getByRole("heading")
        expect(counterElement).toHaveTextContent("1")
                
    })

    test("renders a count of 10 after clicking the increment by amount button", async () => {
        const user = userEvent.setup()
        render(<Counter />)

        const amountInput = screen.getByRole("spinbutton")
        await user.type(amountInput, "5")
        expect(amountInput).toHaveValue(5)  
        
        const incrementByAmountButton = screen.getByRole("button", {
            name: "Increment by amount"
        })

        await user.click(incrementByAmountButton)
        const counterElement = screen.getByRole("heading")
        expect(counterElement).toHaveTextContent("5")
    })




})  