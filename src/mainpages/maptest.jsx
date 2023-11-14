import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// このfileはtest用のやつ

export default class SimpleExample extends Component {
    render() {
    const position = [51.505, -0.09];
    return (
        <div className='container'>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>
                Your click and popup <br />  here's the spot
            </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
    }
}
