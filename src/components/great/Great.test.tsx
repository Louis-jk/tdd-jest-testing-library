import React from "react";
import { render, screen } from "@testing-library/react";
import Great from "./Great";

test("挨拶が正常にレンダリングされる", () => {
    render(<Great />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
});


test("挨拶と名前を一緒にレンダリングされる", () => {
    render(<Great name="ShinCode" />);
    const textElement = screen.getByText("Hello ShinCode");
    expect(textElement).toBeInTheDocument();
});

