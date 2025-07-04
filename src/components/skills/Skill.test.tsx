import { logRoles, render, screen } from '@testing-library/react'
import Skills from './Skills'

describe("Skills", () => {

    const skills = ["HTML", "CSS", "JavaScript"]

    test("renders correctly", () => {
        render(<Skills skills={skills} />)

        const listElement = screen.getByRole("list")
        expect(listElement).toBeInTheDocument();
    })

    test("renders a list of skills", () => {
        render(<Skills skills={skills} />)

        const listItemElements = screen.getAllByRole("listitem")
        expect(listItemElements).toHaveLength(skills.length)
    })

    test("renders login button", () => {
        render(<Skills skills={skills} />)

        const loginButton = screen.getByRole("button", {name: "Login"})
        expect(loginButton).toBeInTheDocument();
    })

    test("renders logout button is not rendered", () => {
        render(<Skills skills={skills} />)

        const logoutButton = screen.queryByRole("button", {name: "Logout"})
        expect(logoutButton).not.toBeInTheDocument();
    }) 
    
    test("renders logout button is eventually displayed", async () => {
        render(<Skills skills={skills} />)

        // logRoles(view.container)
        // screen.debug()

        const logoutButton = await screen.findByRole("button", {name: "Logout"}, {timeout: 2000})
        expect(logoutButton).toBeInTheDocument();

        
    }) 
    
})