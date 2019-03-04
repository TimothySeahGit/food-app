import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import RestaurantForm from "./RestaurantForm";

test("displays all form fields on load", () => {
  const { getByLabelText } = render(<RestaurantForm />);

  expect(getByLabelText("Name")).toHaveAttribute("type", "text");
  expect(getByLabelText("Address")).toHaveAttribute("type", "text");
  expect(getByLabelText("Opening Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Closing Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Cuisine")).toBeInTheDocument();
  expect(getByLabelText("Average Price")).toHaveAttribute("type", "number");
  expect(getByLabelText("Image URL")).toHaveAttribute("type", "text");
});

test("Save button is disabled on page load", () => {
  const { getByText } = render(<RestaurantForm />);
  expect(getByText("Save")).toHaveAttribute("disabled");
});

test("no error message when page first loads", () => {
  const { getByText, queryByText, getByLabelText } = render(<RestaurantForm />);
  expect(
    queryByText('"name" is not allowed to be empty')
  ).not.toBeInTheDocument();
});

test("error message appears if text input becomes invalid, and is removed if it becomes valid", () => {
  const { getByText, queryByText, getByLabelText } = render(<RestaurantForm />);

  const nameInput = getByLabelText("Name");
  fireEvent.change(nameInput, { target: { value: "a" } });
  fireEvent.change(nameInput, { target: { value: "" } });
  expect(getByText('"name" is not allowed to be empty')).toBeInTheDocument();
  fireEvent.change(nameInput, { target: { value: "a" } });
  expect(
    queryByText('"name" is not allowed to be empty')
  ).not.toBeInTheDocument();
});

test("error message appears if number input is invalid", () => {
  const message = /must be larger than or equal to 1/i;
  const { getByText, queryByText, getByLabelText } = render(<RestaurantForm />);
  const priceInput = getByLabelText(/Average Price/i);

  //enter invalid input into number field
  fireEvent.change(priceInput, { target: { value: "0" } });
  expect(getByText(message)).toBeInTheDocument();

  //enter valid input into number field
  fireEvent.change(priceInput, { target: { value: "1" } });
  expect(queryByText(message)).not.toBeInTheDocument();
});
