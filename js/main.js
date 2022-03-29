// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoibXJkeW5hbWl0ZTk5IiwiYSI6ImNrOHI4NTlrMzAwb24zZXBlM2lrZWg5MTUifQ.8mfos-T19QOh5aTpiDUPzQ';

// Initialate map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mrdynamite99/ck8r94ciz0z6f1ilgx09gkizk',
    center: [-80.544444, 28.485833],
    zoom: 15
});

map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup().setHTML('<h3>De Haagse Hogeschool</h3><p>Is momenteel dicht.</p>');

// Adding a marker based on lon lat coordinates
var marker = new mapboxgl.Marker()
    .setLngLat([-80.544444, 28.485833])
    .setPopup(popup)
    .addTo(map);

map.on('load', function() {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': myLocationsList
        }
    });

    // Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true
        }
    });

    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'places', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Populate the popup and set its coordinates based on the feature found.
        popup.setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    map.on('mouseleave', 'places', function() {
        popup.remove();
    });
});