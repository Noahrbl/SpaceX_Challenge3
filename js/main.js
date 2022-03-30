// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoibXJkeW5hbWl0ZTk5IiwiYSI6ImNrOHI4NTlrMzAwb24zZXBlM2lrZWg5MTUifQ.8mfos-T19QOh5aTpiDUPzQ';

// Initialate map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mrdynamite99/ck8r94ciz0z6f1ilgx09gkizk',
    center: [-80.968514, 28.540960],
    zoom: 10
});

map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup().setHTML('<h3>SpaceX landingsplaats</h3><p>Het eerste deel van het landingscomplex is in 2015 aangelegd op de oostzijde van het voormalige Lanceercomplex 13. Het bestaat uit een groot rond betonnen plein waarop in het midden de "X" van het SpaceX logo is geschilderd. Aan de rand staat een aantal op afstand bestuurbare waterkanonnen waarmee eventuele restanten brandende kerosine onder de raketmotoren snel kunnen worden geblust.</p><img src="images/landing.png" alt="Italian Trulli" style="width:100%;height:100%;">');

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


// OpenWeather
function getAPIdata() {

    // construct request
    var request = 'https://api.openweathermap.org/data/2.5/weather?lat=28.485875470077975&lon=-80.54288494833472&appid=7fc21fb9ec63266e22bf47c6bd4a1e1a';

    // get current weather
    fetch(request)

    // parse response to JSON format
    .then(function(response) {
        return response.json();
    })

    // do something with response
    .then(function(response) {
        // show full JSON object
        var weatherBox = document.getElementById('weather');
        weatherBox.innerHTML = (response.main.temp - 273.15).toFixed(0) + ' &#730;C';
    });
}

function getAPIdataElevation() {

    // construct request
    var request = 'https://elevation-api.io/api/elevation?points=(28.485833,-80.544444)&key=5Z6Oa9effPaZd470tELkyrif8bRHcY';

    // get current weather
    fetch(request)

    // parse response to JSON format
    .then(function(response) {
        return response.json();
    })

    // do something with response
    .then(function(response) {
        // show full JSON object
        console.log(response.elevation)
        var elevationBox = document.getElementById('elev');
        elevationBox.innerHTML = response.elevation;
    });
}

// init data stream
getAPIdata();
getAPIdataElevation();