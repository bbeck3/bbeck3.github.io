let map3 = L.map('map3id').setView([39.951024,-75.195468], 15)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}').addTo(map3)

let EaglesIcon = L.icon({
  iconUrl: 'Eagles.png',
  iconSize: [138, 103], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let marker = L.marker([39.951024,-75.195468], {icon:EaglesIcon}).addTo(map3)

let polygonStyle = {
  color: '#006666',
  fillColor: 'grey',
  weight: 1
}

let polygonCoords = [
  [39.950448,-75.199309],
  [39.949494,-75.192786],
  [39.952751,-75.192142],
  [39.953573,-75.198708]
]

let polygon = L.polygon(polygonCoords, polygonStyle).addTo(map3)
