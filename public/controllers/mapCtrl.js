var humap = L.mapbox.map('map', 'vforeman.i3nciijk').setView([38.923, -77.019], 10);
var southWest = L.latLng(38.91469476042763, -77.03224897384644),
	northEast = L.latLng(38.92930210795394, -77.00772285461426),
	bounds = L.latLngBounds(southWest, northEast);
humap.fitBounds(bounds);
L.control.locate().addTo(humap);
humap.on('click',onClickOffCampus);

//load features
// var featureLayer = L.mapbox.featureLayer().addTo(humap);
// var geoData = L.geoJson(humapbox,{
// 	onEachFeature : function(){
// 		console.log('loaded');
// 	}
// }).addTo(humap);

var campus_toggle = document.getElementById('filter-campus');
var sidewalk_toggle = document.getElementById('filter-sidewalkx');
var building_toggle = document.getElementById('filter-buildings');
var all_toggle = document.getElementById('filter-all');

console.dir(Howard);
console.dir(sidewalk_toggle);
console.dir(building_toggle);
console.dir(humap.featureLayer);

humap.featureLayer.on('ready', function(e) {

	var line = [];

	this.eachLayer(function(marker) {
		line.push(marker.getlatlng());
	});

	var polyline_options = {
		color: '#000'
	};

	var polyline = L.polyline(line, polyline_options).addTo(humap);

});



function onClickOffCampus(e){
	alert(e.latlng+
		'\nclick off campus');
}

sidewalk_toggle.onclick = function(e) {
    building_toggle.className = '';
    campus_toggle.className = '';
    all_toggle.className = '';
    this.className = 'active';
    // The setFilter function takes a GeoJSON feature object
    // and returns true to show it or false to hide it.
    humap.featureLayer.setFilter(function(f) {
        return f.properties['marker-symbol'] === 'pitch';
    });
    return false;
};

building_toggle.onclick = function() {
    sidewalk_toggle.className = '';
    campus_toggle.className = '';
    all_toggle.className = '';
    this.className = 'active';
    humap.featureLayer.setFilter(function(f) {
        // Returning true for all markers shows everything.
        return f.properties['marker-symbol'] === 'college';
    });
    return false;
};

campus_toggle.onclick = function() {
    sidewalk_toggle.className = '';
    building_toggle.className = '';
    campus_toggle.className = '';
    this.className = 'active';
    humap.featureLayer.setFilter(function(f) {
        // Returning true for all markers shows everything.
        return f.properties['description'] === 'see name';
    });
    return false;
};

all_toggle.onclick = function() {
    sidewalk_toggle.className = '';
    campus_toggle.className = '';
    building_toggle.className = '';
    this.className = 'active';
    humap.featureLayer.setFilter(function(f) {
        // Returning true for all markers shows everything.
        return true;
    });
    return false;
};