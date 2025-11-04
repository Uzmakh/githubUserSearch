import { render, fireEvent } from "@testing-library/react";
import jest from "@testing-library/jest-dom";
import Header from "./index";
import useTheme from "../../hooks/useTheme";
import { describe, test, expect, beforeEach } from "vitest";

// mock the useTheme hook
jest.mock("../../hooks/useTheme");

describe("Header Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should render with light theme initially", () => {
    const mockToggleTheme = jest.fn();
    useTheme.mockReturnValue(["light", mockToggleTheme]);
    const { getByText, getByRole } = render(<Header />);

    expect(getByText("devfinder")).toBeInTheDocument();
    expect(getByText("Dark")).toBeInTheDocument();
    expect(getByRole("button")).toHaveTextContent("Dark");
  });

  test("should render with dark theme on toggle button", () => {
    const mockToggleTheme = jest.fn();

    useTheme.mockReturnValue(["dark", mockToggleTheme]); //[theme,toggleTheme]
    const { getByText, getByRole } = render(<Header />);

    expect(getByText("devfinder")).toBeInTheDocument();
    expect(getByText("Light")).toBeInTheDocument();
    expect(getByRole("button")).toHaveTextContent("Light");

    // // Simulate button click to toggle theme
  });

  test("should toggle theme on button click", () => {
    const mockToggleTheme = jest.fn();
    useTheme.mockReturnValue(["light", mockToggleTheme]); //[theme,toggleTheme]


    const { getByRole } = render(<Header />);
    const button = getByRole("button");
    fireEvent.click(button);

    // Verify that the toggleTheme function was called
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
