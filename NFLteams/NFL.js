let Teamsmap = L.map('Teamsmapid').setView([38,-98], 4)
let greenBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
let greenBasemap = L.tileLayer(greenBasemapUrl)
greenBasemap.addTo(Teamsmap)

let whiteBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
let whiteBasemap = L.tileLayer(whiteBasemapUrl)

let satelliteUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let satelliteBasemap = L.tileLayer(satelliteUrl)

let myBasemaps = {
  'Light basemap': whiteBasemap,
  'Dark basemap': greenBasemap,
  'Satellite': satelliteBasemap
}


L.control.layers(myBasemaps).addTo(Teamsmap)

let EaglesIcon = L.icon({
  iconUrl: 'Eagles.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Eaglesmarker = L.marker([39.951024,-75.195468], {icon:EaglesIcon}).addTo(Teamsmap)



let fourtyninersIcon = L.icon({
  iconUrl: '49ers.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let fourtyninersmarker = L.marker([37.4032,-121.9698], {icon:fourtyninersIcon}).addTo(Teamsmap)



let BearsIcon = L.icon({
  iconUrl: 'Bears.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Bearsmarker = L.marker([41.8623,-87.6167], {icon:BearsIcon}).addTo(Teamsmap)



let BengalsIcon = L.icon({
  iconUrl: 'Bengals.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Bengalsmarker = L.marker([39.0955,-84.5161], {icon:BengalsIcon}).addTo(Teamsmap)



let BillsIcon = L.icon({
  iconUrl: 'Bills.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Billsmarker = L.marker([42.7738,-78.7870], {icon:BillsIcon}).addTo(Teamsmap)



let BroncosIcon = L.icon({
  iconUrl: 'Broncos.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Broncosmarker = L.marker([39.7439,-105.0201], {icon:BroncosIcon}).addTo(Teamsmap)



let BrownsIcon = L.icon({
  iconUrl: 'Browns.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Brownsmarker = L.marker([41.5061,-81.6995], {icon:BrownsIcon}).addTo(Teamsmap)



let BuccaneersIcon = L.icon({
  iconUrl: 'Buccaneers.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Buccaneersmarker = L.marker([27.9759,-82.5033], {icon:BuccaneersIcon}).addTo(Teamsmap)



let CardinalsIcon = L.icon({
  iconUrl: 'Cardinals.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Cardinalsmarker = L.marker([33.5276,-112.2626], {icon:CardinalsIcon}).addTo(Teamsmap)



let ChargersIcon = L.icon({
  iconUrl: 'Chargers.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Chargersmarker = L.marker([33.9504,-118.3388], {icon:ChargersIcon}).addTo(Teamsmap)



let ChiefsIcon = L.icon({
  iconUrl: 'Chiefs.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Chiefsmarker = L.marker([39.0489,-94.4849], {icon:ChiefsIcon}).addTo(Teamsmap)



let ColtsIcon = L.icon({
  iconUrl: 'Colts.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Coltsmarker = L.marker([39.7601,-86.1639], {icon:ColtsIcon}).addTo(Teamsmap)



let CowboysIcon = L.icon({
  iconUrl: 'Cowboys.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Cowboysmarker = L.marker([32.7473,-97.0945], {icon:CowboysIcon}).addTo(Teamsmap)



let DolphinsIcon = L.icon({
  iconUrl: 'Dolphins.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Dolphinsmarker = L.marker([25.775319,-80.2389], {icon:DolphinsIcon}).addTo(Teamsmap)



let FalconsIcon = L.icon({
  iconUrl: 'Falcons.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Falconsmarker = L.marker([33.7577,-84.4008], {icon:FalconsIcon}).addTo(Teamsmap)



let GiantsIcon = L.icon({
  iconUrl: 'Giants.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Giantsmarker = L.marker([40.8128,-74.0742], {icon:GiantsIcon}).addTo(Teamsmap)



let JaguarsIcon = L.icon({
  iconUrl: 'Jaguars.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Jaguarsmarker = L.marker([30.3240,-81.6373], {icon:JaguarsIcon}).addTo(Teamsmap)



let JetsIcon = L.icon({
  iconUrl: 'Jets.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Jetsmarker = L.marker([40.8128,-74.0742], {icon:JetsIcon}).addTo(Teamsmap)



let LionsIcon = L.icon({
  iconUrl: 'Lions.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Lionsmarker = L.marker([42.3400,-83.0456], {icon:LionsIcon}).addTo(Teamsmap)



let PackersIcon = L.icon({
  iconUrl: 'Packers.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Packersmarker = L.marker([44.5013,-88.0612], {icon:PackersIcon}).addTo(Teamsmap)



let PanthersIcon = L.icon({
  iconUrl: 'Panthers.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Panthersmarker = L.marker([35.2258,-80.8528], {icon:PanthersIcon}).addTo(Teamsmap)
