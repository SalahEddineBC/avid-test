import React from 'react';
import { cleanup, fireEvent, render,screen } from '@testing-library/react';
import Task from '../Task';

afterEach(cleanup);

it('Task should show completed', () => {
    render(
        <Task title="This should be displayed" completed={true} />,
    );
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("This should be displayed")).toBeInTheDocument();
});
it('Task should show uncomplete', () => {
    render(
        <Task title="This should be there" completed={false} />,
    );
    expect(screen.getByText("Not Completed")).toBeInTheDocument();
    expect(screen.getByText("This should be there")).toBeInTheDocument();
});