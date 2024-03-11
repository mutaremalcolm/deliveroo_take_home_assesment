import { test, expect, render, screen } from "vitest";
import MenuCard from "../src/components/MenuCard";

test("MenuCard Component renders with correct details", () => {
  // Arrange
  const props = {
    productKey: "1",
    productName: "Delicious Dish",
    productDescription: "A tasty treat",
    productImageUrl: "/path/to/image.jpg",
    productPrice: 9.99,
  };

  // Act
  render(<MenuCard {...props} />);

  // Assert
  const cardTitle = screen.getByText(props.productName);
  const cardDescription = screen.getByText(props.productDescription);
  const cardPrice = screen.getByText(`$${props.productPrice.toFixed(2)}`);

  // Assert
  expect(cardTitle).toBeInTheDocument();
  expect(cardDescription).toBeInTheDocument();
  expect(cardPrice).toBeInTheDocument();
});
