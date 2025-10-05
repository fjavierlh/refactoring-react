import { render, RenderResult, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { test } from "vitest";
import { AppProvider } from "../context/AppProvider";
import { ProductsPage } from "./ProductsPage";

test("should first", () => {
    renderWithProviders(<ProductsPage />);
    screen.getByRole("heading", { name: "Product price updater" });
});

function renderWithProviders(component: ReactNode): RenderResult {
    return render(<AppProvider>{component}</AppProvider>);
}
