'use strict'

const api = require('express').Router();
const USAirportsData = require('../airportData/processData').USAirportsData;

api.get('/airports', (req, res, next) => {
	res.json(USAirportsData);
})


module.exports = api;