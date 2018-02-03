
/* Inicio Se inicio un registro de mapa 
-----------------------------------------------------------------------*/

/**
   * init_map: longitud y latitud
   * var_mapoptions: pocisional la mapa
   * 
   * 
*/

function init_map() {
	var var_location = new google.maps.LatLng(-17.801906, -63.138028);

	var var_mapoptions = {
		center: var_location,
		zoom: 5
	};

	var var_marker = new google.maps.Marker({
		positon: var_location,
		map: var_map,
		title: "Venice"
	});

	var var_map = new google.maps.Map(document.getElementById("map-container"),
		var_mapoptions);
	var_marker.setMap(var_map);
}

google.maps.event.addDomListener(window, 'load', init_map);