var map = L.mapbox.map('map', 'vforeman.i3nciijk').setView([38.923, -77.019], 10);
var southWest = L.latLng(38.91469476042763, -77.03224897384644),
	northEast = L.latLng(38.92930210795394, -77.00772285461426),
	bounds = L.latLngBounds(southWest, northEast);
map.fitBounds(bounds);


