
<!--Add my snowfall geojson -->
<!--Set a custom icon to represent snowfall -->

$.getJSON("https://raw.githubusercontent.com/emwolfslu/GeoJson/main/rdf2019-3-snow-depth.geojson" 
,function(data){
  var snowIcon = L.icon({
    iconUrl: 'https://cdn3.iconfinder.com/data/icons/picons-weather/57/23_snow_blizzard-512.png',
    iconSize: [25,25]
  }); 
  
  <!--Set popups to show snowfall in mm's and date of collection on user click on icon -->
  L.geoJson(data  ,{
  pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: snowIcon});
    }, 
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h1>Site: '+feature.properties.Site+'</h1><p>Snow Depth in mm: '+feature.properties.SnowDepth_mm+'</p>'+'</h1><p>Month: '+feature.properties.Month+'</p>'+'</h1><p>Month: '+feature.properties.Year+'</p>');
  }
  }  ).addTo(map);

});


<!--Add the weatherstation outpost geojson -->
<!--Set a custom icon to represent the outposts -->

$.getJSON("https://raw.githubusercontent.com/emwolfslu/GeoJson/main/rdf2019-3-station-locations.geojson" 
,function(data){
  var outpostIcon = L.icon({
    iconUrl: 'https://cdn2.iconfinder.com/data/icons/camping-outline-set/144/Outpost-512.png',
    iconSize: [25,25]
  }); 
  
  <!--Set popups to show weather station name and station type on user click on icon-->
  L.geoJson(data  ,{
  pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: outpostIcon});
    }, 
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h1>Station Name: '+feature.properties.Station+'</h1><p>Station Type: '+feature.properties.Type+'</p>');
  }
  }  ).addTo(map);

});

$.getJSON("https://raw.githubusercontent.com/emwolfslu/GeoJson/main/SusitnaRiver.json",function(data){
  

<!--Add the Susitna River geojson drawn at geoman.io editor and a popup on click showing it's name  -->
var datalayer = L.geoJson(data ,{
onEachFeature: function (feature, layer) {
   layer.bindPopup("Susitna River");
  }
}).addTo(map);
map.fitBounds(datalayer.getBounds());
});

<!--Add a geojson showing the proposed hydroelectric dam's exact location and a popup on click with that information  -->
$.getJSON("https://raw.githubusercontent.com/emwolfslu/GeoJson/main/dam%20location.geojson",function(data){
  var datalayer = L.geoJson(data ,{
onEachFeature: function (feature, layer) {
   layer.bindPopup("Proposed Hydroelectric Dam Location");
  }
}).addTo(map);
map.fitBounds(datalayer.getBounds());
});
