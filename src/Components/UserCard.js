import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle, Col } from 'reactstrap';

const UserCard = ({ data: { username = '', name = '', id = 1, ...data }, onClick = () => { } }) => {

    return (
        <Col sm="4" style={{ marginTop: '1%' }}>
            <Card body>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Username: {username}</CardSubtitle>
                <hr></hr>
                <Button onClick={onClick}>Show Profile</Button>
            </Card>
        </Col>
    );
};

export default UserCard;