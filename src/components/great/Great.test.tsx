import React from "react";
import { render, screen } from "@testing-library/react";
import Great from "./Great";

describe("Great component", () => {
    test("render without a name prop", () => {
        render(<Great />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    });
    
    test("render with a name prop", () => {
        render(<Great name="ShinCode" />);
        const textElement = screen.getByText("Hello ShinCode");
        expect(textElement).toBeInTheDocument();
    });
});

