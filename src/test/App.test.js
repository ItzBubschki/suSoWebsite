import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../components/App';
import React from "react";

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText("yeet");
    expect(linkElement).toBeInTheDocument();
});
