var map;
function initMap() {
	var styles = [
	    {
	    	featureType: "landscape",
	    	elementType: "all",
	    	stylers: [
	    		{ "color": "#dce8b1" }
	    	]
	    },
	    {
	    	featureType: "water",
	    	stylers: [
	    		{ "color": "#96bec3" }
	    	]
	    }
	];

	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.431010, lng: 30.527878},
		zoom: 12,
		disableDefaultUI: true,
		scrollwheel: false
	});

	map.setOptions({styles: styles});

	var marker = new google.maps.Marker({
		position: {lat: 50.417558, lng: 30.538521},
		map: map,
		icon: 'img/pin.png'
	});
	marker = new google.maps.Marker({
		position: {lat: 50.418652, lng: 30.499382},
		map: map,
		icon: 'img/pin.png'
	});
	marker = new google.maps.Marker({
		position: {lat: 50.445333, lng: 30.484963},
		map: map,
		icon: 'img/pin.png'
	});
	marker = new google.maps.Marker({
		position: {lat: 50.441178, lng: 30.538311},
		map: map,
		icon: 'img/pin.png'
	});
	marker = new google.maps.Marker({
		position: {lat: 50.452766, lng: 30.588646},
		map: map,
		icon: 'img/pin.png'
	});

}

var mySwiper = new Swiper ('.swiper-container', {
    nextButton: '.swiper-btn-next',
    prevButton: '.swiper-btn-prev',
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 78,
    initialSlide: 1
});