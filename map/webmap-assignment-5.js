let map5 = L.map('map5id').setView([38,-98], 4)
let greenBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
let greenBasemap = L.tileLayer(greenBasemapUrl)
greenBasemap.addTo(map5)

let whiteBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
let whiteBasemap = L.tileLayer(whiteBasemapUrl)

let satelliteUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let satelliteBasemap = L.tileLayer(satelliteUrl)

let myBasemaps = {
  'Light basemap': whiteBasemap,
  'Dark basemap': greenBasemap,
  'Satellite': satelliteBasemap
}

let myControlOptions = {
  collapsed: false
}

let newOrleans = L.marker([30,-90]).addTo(map5)

let opLayers = {
  'marker': newOrleans
}

L.control.layers(myBasemaps,opLayers,myControlOptions).addTo(map5)


geoJSONstyle = function (state){
  let popmales = state.properties.MALES
  let popfemales = state.properties.FEMALES
 let stateColor = 'red'
 if ( popmales < popfemales ) { stateColor = 'blue' }
 let geoJSONstyle = {
   color: stateColor,
   weight: 2,
   fillOpacity: .3
}
return geoJSONstyle
}

function createPopup (state, stateLayer){
  let name = state.properties.STATE_NAME
    let age = state.properties.MED_AGE
    stateLayer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
  }


geoJSONOptions = {
  style: geoJSONstyle,
  onEachFeature: createPopup
}


L.geoJSON(StateData, geoJSONOptions).addTo(map5)
