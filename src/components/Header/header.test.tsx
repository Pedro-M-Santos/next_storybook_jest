import { Header } from "@components/Header/Header";
import { render, screen } from "@testing-library/react";

describe("Header Unit Test", () => {
	it("should render the Header component", () => {
		render(<Header />);
		const header = screen.getByText("Header");
		expect(header).not.toBeNull();
	});
});
