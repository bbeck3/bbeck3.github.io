let map4 = L.map('map4id').setView([38,-98], 4)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}').addTo(map4)


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


L.geoJSON(StateData, geoJSONOptions).addTo(map4)
