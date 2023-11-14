import React, { Component, useState } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
// 自分の居場所を取得する
// 参考資料；https://qiita.com/studio_haneya/items/fbb52fa03ab4f212ced0

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
    click() {
        map.locate()
    },
    locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
    },
    })

    return position === null ? null : (
    <Marker position={position}>
        <Popup>You are here</Popup>
    </Marker>
    )
}

export default class EventsExample extends Component {
    render() {
    const position = [51.505, -0.09];
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        </MapContainer>
    )
    }
}

