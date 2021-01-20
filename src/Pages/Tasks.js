import React, { useEffect, useState } from 'react'
import { Container, Button } from 'reactstrap';
import TasksView from '../Components/TasksView';
import qs from 'query-string';
import { API_URL } from '../constants';

const Tasks = ({ match, history, ...props }) => {
    const [data, setData] = useState([]);
    const [completed, setCompleted] = useState(false);
    const { name } = qs.parse(history.location.search);
    useEffect(() => {
        const userId = match.params.id;
        fetch(`${API_URL}/user/${userId}/todos`).then(resp => {
            if (resp.status == 404) {
                throw new Error("Not found");
            }
            return resp.json();
        }).then(resp => { setData(resp) }).catch(e => history.replace('/'));
    }, [])
    const renderData = completed ? data.filter(elem => elem.completed === true) : data;
    const buttonText = completed ? "Show all tasks" : "Show completed tasks";
    return (
        <Container>
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1 className="display-4">{name ? `${name}'s Tasks` : `User's Tasks`}</h1>
                        <Button color='primary' onClick={() => {
                            setCompleted(!completed);
                        }}>{buttonText}</Button>
                    </div>
                    <hr className="my-4" />
                    <TasksView data={renderData} loading={data.length === 0} />
                </div>
            </div>
        </Container>
    )
}
export default Tasks;
