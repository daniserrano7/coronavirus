import 'ol/ol.css';
import {Map, View} from 'ol';
import VectorSource from 'ol/source/Vector';
import {Vector as VectorLayer, Tile as TileLayer} from 'ol/layer';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import Style from 'ol/style/Style';
import Circle from 'ol/style/Circle';
import Stroke from 'ol/style/Stroke';
import {fromLonLat} from 'ol/proj';
import OSM from 'ol/source/OSM';

import getCsvPromise from './getCsvPromise';
import getCsvData from './getCsvData';

const map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: [0, 0],
        zoom: 0
    })
});

getCsvPromise().then(values => {
    const data = getCsvData(values);
    console.log(data);

    var featureStyle = new Style({
        image: new Circle({
            radius: 5,
            fill: null,
            stroke: new Stroke({
                color: 'rgba(255,0,0,0.9)',
                width: 3
            })
        })
    });

    var vectorSource = new VectorSource({
        projection: 'EPSG:3587'
    });

    data.confirmed.byProvince.forEach(point => {
        var feature = new Feature(
            new Point(fromLonLat([point.long, point.lat]))
        );

        feature.setStyle(featureStyle);
        vectorSource.addFeature(feature);
    });


    var vectorLayer = new VectorLayer({
        source: vectorSource
    });

    map.addLayer(vectorLayer);
});