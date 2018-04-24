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
Eaglesmarker.bindPopup('Lincoln Financial Field')


let fourtyninersIcon = L.icon({
  iconUrl: '49ers.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let fourtyninersmarker = L.marker([37.4032,-121.9698], {icon:fourtyninersIcon}).addTo(Teamsmap)
fourtyninersmarker.bindPopup('Levis Stadium')


let BearsIcon = L.icon({
  iconUrl: 'Bears.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Bearsmarker = L.marker([41.8623,-87.6167], {icon:BearsIcon}).addTo(Teamsmap)
Bearsmarker.bindPopup('Soldier Field')


let BengalsIcon = L.icon({
  iconUrl: 'Bengals.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Bengalsmarker = L.marker([39.0955,-84.5161], {icon:BengalsIcon}).addTo(Teamsmap)
Bengalsmarker.bindPopup('Paul Brown Stadium')


let BillsIcon = L.icon({
  iconUrl: 'Bills.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Billsmarker = L.marker([42.7738,-78.7870], {icon:BillsIcon}).addTo(Teamsmap)
Billsmarker.bindPopup('New Era Field')


let BroncosIcon = L.icon({
  iconUrl: 'Broncos.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Broncosmarker = L.marker([39.7439,-105.0201], {icon:BroncosIcon}).addTo(Teamsmap)
Broncosmarker.bindPopup('Sports Authority Field at Mile High')


let BrownsIcon = L.icon({
  iconUrl: 'Browns.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Brownsmarker = L.marker([41.5061,-81.6995], {icon:BrownsIcon}).addTo(Teamsmap)
Brownsmarker.bindPopup('First Energy Stadium')


let BuccaneersIcon = L.icon({
  iconUrl: 'Buccaneers.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Buccaneersmarker = L.marker([27.9759,-82.5033], {icon:BuccaneersIcon}).addTo(Teamsmap)
Buccaneersmarker.bindPopup('Raymond James Stadium')


let CardinalsIcon = L.icon({
  iconUrl: 'Cardinals.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Cardinalsmarker = L.marker([33.5276,-112.2626], {icon:CardinalsIcon}).addTo(Teamsmap)
Cardinalsmarker.bindPopup('University of Phoenix Stadium')


let ChargersIcon = L.icon({
  iconUrl: 'Chargers.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Chargersmarker = L.marker([33.9504,-118.3388], {icon:ChargersIcon}).addTo(Teamsmap)
Chargersmarker.bindPopup('StubHub Center')


let ChiefsIcon = L.icon({
  iconUrl: 'Chiefs.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Chiefsmarker = L.marker([39.0489,-94.4849], {icon:ChiefsIcon}).addTo(Teamsmap)
Chiefsmarker.bindPopup('Arrowhead Stadium')


let ColtsIcon = L.icon({
  iconUrl: 'Colts.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Coltsmarker = L.marker([39.7601,-86.1639], {icon:ColtsIcon}).addTo(Teamsmap)
Coltsmarker.bindPopup('Lucas Oil Stadium')


let CowboysIcon = L.icon({
  iconUrl: 'Cowboys.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Cowboysmarker = L.marker([32.7473,-97.0945], {icon:CowboysIcon}).addTo(Teamsmap)
Cowboysmarker.bindPopup('AT&T Stadium')


let DolphinsIcon = L.icon({
  iconUrl: 'Dolphins.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Dolphinsmarker = L.marker([25.775319,-80.2389], {icon:DolphinsIcon}).addTo(Teamsmap)
Dolphinsmarker.bindPopup('Hard Rock Stadium')


let FalconsIcon = L.icon({
  iconUrl: 'Falcons.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Falconsmarker = L.marker([33.7577,-84.4008], {icon:FalconsIcon}).addTo(Teamsmap)
Falconsmarker.bindPopup('Mercedes-Benz Stadium')


let GiantsIcon = L.icon({
  iconUrl: 'Giants.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Giantsmarker = L.marker([40.8128,-74.0742], {icon:GiantsIcon}).addTo(Teamsmap)
Giantsmarker.bindPopup('MetLife Stadium')


let JaguarsIcon = L.icon({
  iconUrl: 'Jaguars.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Jaguarsmarker = L.marker([30.3240,-81.6373], {icon:JaguarsIcon}).addTo(Teamsmap)
Jaguarsmarker.bindPopup('EverBank Field')


let JetsIcon = L.icon({
  iconUrl: 'Jets.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Jetsmarker = L.marker([40.8128,-74.0742], {icon:JetsIcon}).addTo(Teamsmap)
Jetsmarker.bindPopup('MetLife Stadium')


let LionsIcon = L.icon({
  iconUrl: 'Lions.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Lionsmarker = L.marker([42.3400,-83.0456], {icon:LionsIcon}).addTo(Teamsmap)
Lionsmarker.bindPopup('Ford Field')


let PackersIcon = L.icon({
  iconUrl: 'Packers.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Packersmarker = L.marker([44.5013,-88.0612], {icon:PackersIcon}).addTo(Teamsmap)
Packersmarker.bindPopup('Lambeau Field')


let PanthersIcon = L.icon({
  iconUrl: 'Panthers.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Panthersmarker = L.marker([35.2258,-80.8528], {icon:PanthersIcon}).addTo(Teamsmap)
Panthersmarker.bindPopup('Bank of America Stadium')


let PatriotsIcon = L.icon({
  iconUrl: 'Patriots.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Patriotsmarker = L.marker([42.0909,-71.2643], {icon:PatriotsIcon}).addTo(Teamsmap)
Patriotsmarker.bindPopup('Gillette Stadium')


let RaidersIcon = L.icon({
  iconUrl: 'Raiders.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Raidersmarker = L.marker([37.7516,-122.2005], {icon:RaidersIcon}).addTo(Teamsmap)
Raidersmarker.bindPopup('Oakland Alameda Coliseum')


let RamsIcon = L.icon({
  iconUrl: 'Rams.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Ramsmarker = L.marker([37.7259,-122.4485], {icon:RamsIcon}).addTo(Teamsmap)
Ramsmarker.bindPopup('Los Angeles Memorial Coliseum')


let RedskinsIcon = L.icon({
  iconUrl: 'Redskins.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Redskinsmarker = L.marker([38.9076,-76.8645], {icon:RedskinsIcon}).addTo(Teamsmap)
Redskinsmarker.bindPopup('FedEx Field')


let SaintsIcon = L.icon({
  iconUrl: 'Saints.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Saintsmarker = L.marker([29.9511,-90.0812], {icon:SaintsIcon}).addTo(Teamsmap)
Saintsmarker.bindPopup('Mercedes-Benz Superdome')


let SeahawksIcon = L.icon({
  iconUrl: 'Seahawks.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Seahawksmarker = L.marker([47.5952,-122.3316], {icon:SeahawksIcon}).addTo(Teamsmap)
Seahawksmarker.bindPopup('CenturyLink Field')


let SteelersIcon = L.icon({
  iconUrl: 'Steelers.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Steelersmarker = L.marker([40.4468,-80.0158], {icon:SteelersIcon}).addTo(Teamsmap)
Steelersmarker.bindPopup('Heinz Field')


let TexansIcon = L.icon({
  iconUrl: 'Texans.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Texansmarker = L.marker([29.6847,-95.4108], {icon:TexansIcon}).addTo(Teamsmap)
Texansmarker.bindPopup('NRG Stadium')


let TitansIcon = L.icon({
  iconUrl: 'Titans.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Titansmarker = L.marker([36.1665,-86.7713], {icon:TitansIcon}).addTo(Teamsmap)
Titansmarker.bindPopup('Nissan Stadium')


let VikingsIcon = L.icon({
  iconUrl: 'Vikings.png',
  iconSize: [138, 103],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let Vikingsmarker = L.marker([44.9738,-93.2578], {icon:VikingsIcon}).addTo(Teamsmap)
Vikingsmarker.bindPopup('U.S. Bank Stadium')
