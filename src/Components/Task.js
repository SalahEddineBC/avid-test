import React from 'react'
import { ListGroupItem, Badge } from 'reactstrap';
const Status = ({ done = false }) => {
    if (done) {
        return <Badge pill color="success">Completed</Badge>
    }
    return <Badge pill color="danger">Not Completed</Badge>

}
const TasksView = ({ title = "", completed = false }) => {
    return (
        <ListGroupItem className="justify-content-between">
            {title}{"  "}  
            <Status done={completed} />
        </ListGroupItem>
    )
}

export default TasksView
