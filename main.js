// let latitude=22.7868542, longitude=88.3643296;

// Initializing Mapbox


$(document).ready(function(){
	alert("Please allow your device to know your location")
	initgeolocateControl()
})

map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);



function initgeolocateControl(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success)
		
	}
	else{
		alert('Sorry! Browser dose not spport the geoloction sevrs')
	}
}

function success(position){
	// console.log(position)
	longitude = position.coords.longitude
    latitude =  position.coords.latitude
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

    var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 16
	});


map.on("cilck", function(e){
	console.log(e)
})
}
// map.addControl(
// 	new MapboxDirections({
// 		accessToken: mapboxgl.accessToken
// 	}),
// 	'top-left'
// );