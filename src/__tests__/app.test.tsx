import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import {render, screen } from "@testing-library/react"
import  App  from "../app/page"

test("General Render Test", async () => {
    // Assemble
    const ui = await App();
    render(ui);
  
    // Act
    const navbarLeft = screen.getByText(/Project Source Code/i);
    const navbarRight = screen.getByText(/Malcolm Mutare/i);
    const categoriesDemo = screen.getByText("Demo");
    const categoriesMains = screen.getByText("Mains");
    const categoriesTest = screen.getByText("Test new section");
  
    // Assert
    expect(navbarLeft).toBeInTheDocument();
    expect(navbarRight).toBeInTheDocument();
    expect(categoriesDemo).toBeInTheDocument();
    expect(categoriesMains).toBeInTheDocument();
    expect(categoriesTest).toBeInTheDocument();
  });
