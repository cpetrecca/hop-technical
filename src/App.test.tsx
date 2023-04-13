import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Checks if app is loading", () => {
  test("renders app header.", () => {
    render(<App />);
    const linkElement = screen.getByText(/Ejercicio Técnico para Hop./i);
    expect(linkElement).toBeInTheDocument();
  });
});
