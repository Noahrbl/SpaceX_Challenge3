// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoibXJkeW5hbWl0ZTk5IiwiYSI6ImNrOHI4NTlrMzAwb24zZXBlM2lrZWg5MTUifQ.8mfos-T19QOh5aTpiDUPzQ';

// Initialate map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mrdynamite99/ck8r94ciz0z6f1ilgx09gkizk',
    center: [-80.544444, 28.485833],
    zoom: 15
});

var popup = new mapboxgl.Popup().setHTML('<h3>De Haagse Hogeschool</h3><p>Is momenteel dicht.</p>');

// Adding a marker based on lon lat coordinates
var marker = new mapboxgl.Marker()
    .setLngLat([-80.544444, 28.485833])
    .setPopup(popup)
    .addTo(map);

// // wacht tot de map en styles geladen zijn
// map.on('load', function() {

//     // laad een extern bestand
//     map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {

//         // voeg image toe
//         map.addImage('cat', image);

//         // defineer een punt in het geheugen
//         map.addSource('point', {
//             type: 'geojson',
//             data: {
//                 type: 'FeatureCollection',
//                 features: [{
//                     type: 'Feature',
//                     geometry: {
//                         type: 'Point',
//                         coordinates: [4.32284, 52.067101]
//                     }
//                 }]
//             }
//         });

//         // plak de nieuwe source 'point' op de kaart in een eigen layer
//         map.addLayer({
//             id: 'points',
//             type: 'symbol',
//             source: 'point',
//             layout: {
//                 'icon-image': 'cat',
//                 'icon-size': 0.25
//             }
//         });
//     });
// });

// style: 'mapbox://styles/mapbox/satellite-v9'
// style: 'mapbox://styles/mapbox/dark-v10'
// pitch: 45,
// bearing: -17.6,
// Positioning the map on a certain longitute + latitude and zooming in
// Let op de volgorde van de lat, lon!!
// center: [4.322840, 52.067101],
// zoom: 15,





// Add zoom and rotation controls to the map.
// map.addControl(new mapboxgl.NavigationControl());