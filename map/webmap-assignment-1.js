//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let map1 = L.map('map1id').setView([39.951024,-75.195468], 15)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}').addTo(map1)
let marker = L.marker([39.951024,-75.195468]).addTo(map1)
let polygon = L.polygon([
  [39.950448,-75.199309],
  [39.949494,-75.192786],
  [39.952751,-75.192142],
  [39.953573,-75.198708]
]).addTo(map1)

polygon.bindPopup('University of Pennsylvania')
marker.bindPopup('Penn Campus')

map1.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

var latlngs = [
    [39.951684,-75.197109],
    [39.951503,-75.195688]
]
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map1);
