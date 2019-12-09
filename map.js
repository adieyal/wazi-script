url = "https://mapit.openup.org.za/areas/MDB-levels:CY-ZA%7CPR.geojson?generation=1&simplify_tolerance=0.005"
var map = L.map('main-map', { zoomControl: false}).setView([-32.8685099,20.7031068], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
$.getJSON(url, function(data) {
    L.geoJson(data).addTo(map);
    L.control.zoom({position: 'topRight'}).addTo(map);
});
