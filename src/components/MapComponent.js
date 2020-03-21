import React from 'react';
import { Map, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import '../css/MapComponent.css';
import MarkerPopup from './MarkerPopup';

const MapComponent = ({data}) => {
    console.log('DATA:', data);
    const center = [40, 2];
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
        const radius = 6 * Math.log(n) - 30;

        return radius;
    }

    return (
        <Map center={center} zoom={zoom}>
            <TileLayer
                url={url}
                attribution={attribution}
            />
            {data.confirmed.byCountry.map(confirmedCountry => {
                let country = confirmedCountry.country;
                let confirmed = confirmedCountry.number;
                let recovered = data.recovered.byCountry.find(recoveredCountry => {
                    return recoveredCountry.country === confirmedCountry.country
                }).number;

                let deaths = data.deaths.byCountry.find(deathsCountry => {
                    return deathsCountry.country === confirmedCountry.country
                }).number;

                let countryData = {country, confirmed, recovered, deaths};

                return (
                    <CircleMarker
                        key={confirmedCountry.country}
                        center={[confirmedCountry.lat, confirmedCountry.long]}
                        color="red" 
                        radius={getRadius(confirmedCountry.number)}
                    >
                        <Popup>
                            <MarkerPopup data={countryData}/>
                        </Popup>
                    </CircleMarker>
                )
            })}
        </Map>
    )
}

export default MapComponent;