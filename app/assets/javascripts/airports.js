// OpenStreetMap data
var osm = {
  url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors'
};

// create map – współrzędne: [ szerokość, długość ]
var map = L.map('map').setView([52.05735, 19.19209], 6);  // center: Łęczyca, zoom: 6

var osmTileLayer = L.tileLayer(osm.url, {attribution: osm.attribution})
osmTileLayer.addTo(map);

// add markers to map

$.getJSON("/airports", function(data) {
  console.log('Loading lotniska from MongoDB database...');
  console.log('  liczba wszystkich lotnisk:', data.length);

  L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { riseOnHover: true });
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.title + '<br>(' + feature.properties.description + ')');
    }
  }).addTo(map);
});
