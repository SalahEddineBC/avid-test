import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import UserCard from '../UserCard';
afterEach(cleanup);

it('should show the name', () => {
    render(
        <UserCard data={{ name: 'Avid', username: 'Test' }} />,
    );
    expect(screen.getByText("Avid")).toBeInTheDocument();
    expect(screen.getByText("Username: Test")).toBeInTheDocument();
});
it('should redirect to user profile', () => {
    const mockOnClick=jest.fn();
    render(
        <UserCard data={{ name: 'Avid', username: 'Test' }}  onClick={mockOnClick}/>,
    );
    fireEvent.click(screen.getByText("Show Profile"))
    expect(mockOnClick).toBeCalled();
});