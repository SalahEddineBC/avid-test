import React, { useEffect, useState } from "react";
import { Container, Button } from 'reactstrap';
import UserProfile from "../Components/UserProfile";
import { API_URL } from "../constants";

const User = ({ match, history, ...props }) => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        const userId = match.params.id;
        fetch(`${API_URL}/users/${userId}`).then(resp => {
            if (resp.status == 404) {
                throw new Error("Not found");
            }
            return resp.json();
        }).then(resp => { setData(resp) }).catch(e => history.replace('/'));
    }, [])
    const goToTasksPage = () => {
        history.push(`/users/${match.params.id}/todos?name=${data.name}`);
    }
    return (<Container>
        <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: "2%" }}>
                    <h1 className="display-4">{data ? data.name : ""}</h1>
                    <Button color='primary' onClick={goToTasksPage}>Display Tasks</Button>
                </div>

                <hr className="my-4" />
                <UserProfile data={data} loading={data === undefined} onClick={goToTasksPage} />
            </div>
        </div>
    </Container>)
}
export default User;