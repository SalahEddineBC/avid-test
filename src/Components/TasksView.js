import React from 'react'
import { ListGroup } from 'reactstrap';
import Task from './Task';
const TasksView = ({ data = [{ title: 'HELLO WORLD', completed: false }] }) => {
    if (data.length < 1) return (<p>Nothing Here</p>)
    return (
        <ListGroup>
            {data.map((elem, index) => {
                return (
                    <Task key={index} title={elem.title} completed={elem.completed} />)
            })}
        </ListGroup>
    )
}

export default TasksView
