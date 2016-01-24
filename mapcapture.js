var intervalLength = 300000;

function screenCap() {
	loadMap();
	loadRadar();
}

function loadMap() {
	var page = require('webpage').create();

	page.viewportSize = {
	  width: 1200,
	  height: 1200
	};

	page.open('https://www.google.com/maps/@38.6337794,-76.8123652,6z/data=!5m1!1e1', function() {
		map_wait();
	});

	function map_wait() {
		setTimeout(function() {
			var timestamp = (new Date()).toLocaleString();
			page.render('screengrabs/map-' + timestamp + '.png');
		}, 5000);
	}
}

function loadRadar() {
	var page = require('webpage').create();

	page.viewportSize = {
	  width: 1200,
	  height: 1200
	};

	page.open('http://project.wnyc.org/storm-radar/', function() {
		radar_wait();
	});

	function radar_wait() {
		setTimeout(function() {
			var timestamp = (new Date()).toLocaleString();
			page.render('screengrabs/radar-' + timestamp + '.png');
		}, 5000);
	}
}

screenCap();
var interval = setInterval(screenCap, intervalLength);
