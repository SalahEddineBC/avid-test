import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import UserProfile from '../UserProfile';
afterEach(cleanup);
const dummyData = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
it('should show the name', () => {
    render(
        <UserProfile data={{ name: 'Avid', username: 'Test' }} loading={true} />,
    );
    expect(screen.getByText("Loading .....")).toBeInTheDocument();
});
it('should redirect to users todos', () => {
    const mockOnClick = jest.fn();
    render(
        <UserProfile data={dummyData} onCLick={mockOnClick} />,
    );
    fireEvent.click(screen.getByText("Display Tasks"))
    expect(mockOnClick).toBeCalled();
});