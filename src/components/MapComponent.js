import React from 'react';
import { Map, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import '../css/MapComponent.css';

const MapComponent = ({data}) => {
    console.log('DATA:', data);
    const center = [0, 0];
    const zoom = 5;
    const url = 'https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    const attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors';

    const getRadius = (n) => {
        // const min = 2;
        // const max = 50;
        // const c = 1 / 80000;
        // const radius = n * c * max + min - 1;
        // console.log(radius);

        //const radius = 0.0015 * n + 44.35;
        const radius = 5 * Math.log(n) - 0;
        console.log(radius);

        return radius;
    }

    return (
        <Map center={center} zoom={zoom}>
            <TileLayer
                url={url}
                attribution={attribution}
            />
            {data.confirmed.byCountry.map(country => (
                <CircleMarker
                    key={country.country}
                    center={[country.lat, country.long]}
                    color="red" 
                    radius={getRadius(country.number)}
                >
                    <Popup>{country.country}</Popup>
                </CircleMarker>
            ))}
        </Map>
    )
}

export default MapComponent;