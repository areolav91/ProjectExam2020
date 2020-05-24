function initMap() {
	var options = {
		zoom: 14,
		center: { lat: 38.882938, lng: -77.016197 },
	};

	var map = new google.maps.Map(document.getElementById("map"), options);

	var marker = new google.maps.Marker({
		position: { lat: 38.882938, lng: -77.016197 },
		map: map,
	});
}
