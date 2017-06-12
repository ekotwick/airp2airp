'use strict';

const allAirports = require('./data').data;

const USAirports = allAirports.split('\n').filter(ap => ap.includes('UNITED STATES') && !ap.includes('Bus Service'));

const cleanAirportData = array => {
	return array.map(a => {
		let toReturn = a.slice(2,-1);
		toReturn = toReturn
			.replace(/(Apt)$/, 'Airport')
			.replace(/Intl/i, 'International')
			.replace(/Arpt/i, 'Airport')
			.replace(/St /i, 'St. ')
			.replace(/Cnty/i, 'County')
			.replace(/Natl/i, 'National')
			.replace(/Aprt/i, 'Airport');
		return toReturn;
	});
};

const generateDataObject = array => {
	const data = cleanAirportData(array);
	return {
		airportName: data[1],
		location: data[3],
		coordinates: {
			latitude: data[7],
			longitude: data[8]
		}
	};
};

const USAirportsData = USAirports.map(ap => {
	return generateDataObject(ap.split(','));
});

module.exports = { USAirportsData, generateDataObject };