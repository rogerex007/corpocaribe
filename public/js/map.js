let mymap = L.map('mapid').setView([51.505, -0.09], 13);

const acces_token = 'pk.eyJ1Ijoicm9nZXJleDAwNyIsImEiOiJjazQ1dzBydWowZHJiM2VvOTl6bG1paXVhIn0.GLuaOmd_fn8b-NudM87YRw';

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${acces_token}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: acces_token
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);