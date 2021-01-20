import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function UserProfile({ data = dummyData, loading = false, onCLick = () => { }, ...props }) {
    if (loading) return <p>Loading .....</p>
    return (
        <div>
            <Col sm="12" style={{ marginTop: '1%' }}>
                <Card body>
                    <CardText>Username: {data.username}</CardText>
                    <CardText>Email {data.email}</CardText>
                    <CardText>Phone: {data.phone}</CardText>
                    <CardText>website: <a href={`http://${data.website}`}>{data.website}</a></CardText>
                    <CardText>Address:</CardText>
                    <CardText>Street: {data.address.street}</CardText>
                    <CardText>Suite: {data.address.suite}</CardText>
                    <CardText>City: {data.address.city}</CardText>
                    <CardText>Zip Code: {data.address.zipcode}</CardText>
                    <CardText>View on Map:</CardText>
                    <div className="d-flex justify-content-center">

                        <MapContainer center={[data.address.geo.lat, data.address.geo.lng]} zoom={5} scrollWheelZoom={false} style={{ height: '400px', width: '500px' }} >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[data.address.geo.lat, data.address.geo.lng]}>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>
                        <Button color="primary" onClick={onCLick}>Display Tasks</Button>
                    </div>
                </Card>
            </Col>
        </div >
    )
}
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