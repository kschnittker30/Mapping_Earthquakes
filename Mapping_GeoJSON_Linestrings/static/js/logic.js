// Add console.log to check to see if our code is working.
//console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([44.0, -80.0], 2);


// We create the tile layer that will be the background of our map.
//streets-v11
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our street tile layer to the map.
light.addTo(map);


// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/kschnittker30/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";


// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
L.geoJson(data, {
    style: myStyle,
    onEachFeature: function(feature, layer){
        layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: " + feature.properties.dst + "</h3>");
    }
})
.addTo(map);
});

  // Creating a GeoJSON layer with the retrieved data.
//  L.geoJSON(data).addTo(map);
//});