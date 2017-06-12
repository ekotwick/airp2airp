'use strict';
// testing utilities
import { expect } from 'chai';

// other utilities
import { generateDataObject } from '../../airportData/processData';
import { AirportTrie } from '../utils/airportTrie';

// components
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

describe ('Store', () => {
	const airportsTest = new AirportTrie();
	const rawSampleData = `('ANW', 'Ainsworth Minicipal Arpt', 'ANW', 'Ainsworth', 'UNITED STATES', 'US', '-100', '42.58', '-99.9933', 1, 'true'),
	('ANU', 'V C Bird Intl Arpt', 'ANU', 'Antigua', 'ANTIGUA AND BARBUDA', 'AG', '-4', '17.136749', '-61.792667', 1, 'true'),
	('ANR', 'Antwerp Brussels North', 'ANR', 'Antwerp', 'BELGIUM', 'BE', '1', '51.189444', '4.460278', 1, 'true'),
	('ANP', 'Lee Annapolis Arpt', 'ANP', 'Annapolis', 'UNITED STATES', 'US', '-100', '0', '0', 1, 'true'),
	('ANI', 'Aniak Arpt', 'ANI', 'Aniak', 'UNITED STATES', 'US', '-9', '61.5816', '-159.543', 1, 'true'),
	('ESB', 'Esenboga Arpt', 'ANK', 'Ankara', 'TURKEY', 'TR', '2', '40.128082', '32.995083', 1, ''),
	('ANG', 'Brie Champniers', 'ANG', 'Angouleme', 'FRANCE', 'FR', '1', '45.729247', '0.221456', 1, 'true'),
	('ANF', 'Cerro Moreno Arpt', 'ANF', 'Antofagasta', 'CHILE', 'CL', '-4', '-23.444478', '-70.4451', 1, 'true'),
	('ANE', 'Marce Arpt', 'ANE', 'Angers', 'FRANCE', 'FR', '1', '47.5603', '-0.312222', 1, 'true'),
	('AND', 'Anderson Arpt', 'AND', 'Anderson', 'UNITED STATES', 'US', '-5', '34.494583', '-82.709389', 1, 'true'),
	('ANC', 'Anchorage Intl Arpt', 'ANC', 'Anchorage', 'UNITED STATES', 'US', '-9', '61.174361', '-149.996361', 1, 'true')`
	let arrayOfData = rawSampleData.split('\n').filter(ap => ap.includes('UNITED STATES') && !ap.includes('Bus Service'))
	const processedSampleData = arrayOfData.map(ap => {
		return generateDataObject(ap.split(','));
	});
	airportsTest.insertAirportData(processedSampleData);
	let firstAPSetTest = ['Ainsworth Minicipal Airport, Ainsworth','Aiken Municipal Airport, Aiken','Air Terminal Airport, Sebring']
	let secondAPSetTest = ['Detroit City Airport, Detroit','Detroit Metro Wayne County Airport, Detroit'];
	let firstCoordsTest = {
		latitude: "41.978603",
		longitude: "-87.904842"
	}
	let secondCoordsTest = {
		latitude: "40.6925",
		longitude: "-74.168667"
	};

	const initialState = {
		airports: {},
		firstAPSet: [],
		firstCoords: {},
		secondAPSet: [],
		secondCoords: {}
	}

	let testStore;

	beforeEach('Create test store and freeze it', () => {
		testStore = createStore(rootReducer);
		Object.freeze(testStore.getState())
	});

	it('should have expect initial state', () => {
		expect(testStore.getState()).to.be.deep.equal(initialState);
	});

	describe('AirportData reducer', () => {
		it('should place a Trie in the store', () => {
			testStore.dispatch({type: 'SET_AIRPORT_DATA', data: airportsTest});
			let newState = testStore.getState();
			expect(newState.airports).to.be.deep.equal(airportsTest);
			expect(newState.airports).to.be.instanceof(AirportTrie);
		});
	});

	describe('FirstAirportSet reducer', () => {
		it('should place an array of airports in the store', () => {
			testStore.dispatch({type: 'AIRPORT_SET_ONE', set: firstAPSetTest});
			let newState = testStore.getState();
			expect(newState.firstAPSet).to.be.deep.equal(firstAPSetTest);
		});
	});

	describe('SecondAirportSet reducer', () => {
		it('should place an array of airports in the store', () => {
			testStore.dispatch({type: 'AIRPORT_SET_TWO', set: secondAPSetTest});
			let newState = testStore.getState();
			expect(newState.secondAPSet).to.be.deep.equal(secondAPSetTest);
		});
	});

	describe('FirstCoordinates reducer', () => {
		it('should place an object of airport coordinates in the store', () => {
			testStore.dispatch({type: 'SET_FIRST_COORDINATES', coordinates: firstCoordsTest});
			let newState = testStore.getState();
			expect(newState.firstCoords).to.be.deep.equal(firstCoordsTest);
			expect(newState.firstCoords).to.have.own.property('latitude');
			expect(newState.firstCoords).to.have.own.property('longitude');
			expect(Object.keys(newState.firstCoords).length).to.equal(2);
		});
	});

	describe('SecondCoordinates reducer', () => {
		it('should place an object of airport coordinates in the store', () => {
			testStore.dispatch({type: 'SET_SECOND_COORDINATES', coordinates: secondCoordsTest});
			let newState = testStore.getState();
			expect(newState.secondCoords).to.be.deep.equal(secondCoordsTest);
			expect(newState.secondCoords).to.have.own.property('latitude');
			expect(newState.secondCoords).to.have.own.property('longitude');
			expect(Object.keys(newState.secondCoords).length).to.equal(2);
		});
	});
});