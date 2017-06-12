## Moat Challenge #2a by Edmond Kotwick

Completed in JavaScript with Node, Express, and React tech stack.

To install npm dependencies, enter into the command line: `npm install`

To view app at a local host: 
1) Run webpack by entering into the command line: `npm run build`
2) Start server by entering into the command line: `npm start`
3) In browser go to: `http://localhost:1337/#/`

To run test suite, enter into the command line: `npm run test`

#### Data Flow

* When a user enters `http://localhost:1337/#/`, a GET request is made to the app's API, which sends to the store all airport data (data at: airportData/data.js)
* For the present purposes, airport data is stored as a string in a js file. Upon retrieval, several algorithms clean up the data. (Data taken from https://gist.githubusercontent.com/tanerdogan/10103011/raw/1b7cf2b5dfcb9be242e7cc8fbc1b95950b16becb/airports.sql)
* When the client side receives the airport data, the data is placed into the redux store as a trie data structure (trie at: app/utils/airportTrie); the trie enables autocomplete functionality
* When a user enters a key into one of the input fields, the target value of the input field——a prefix——is used to traverse through the trie and retrieve all possible suffixes of the input (see the `autocomplete` and `getAllSuffixes` methods on the trie)
* When a user enters the full name of the airport or selects from the options provided by autocomplete, the coordinates of that airport are loaded into the store as an object with two properties, `latitude` and `longitude`.
* When the user enters two full airport names, the `Distance` component (app/components/Distance.js) pulls the two data objects down from the store and passes them into a distance-finding algorithm (app/utils/distanceFinder.js); the return value is then displayed to the screen

#### To-Dos

* At present, when a user types in even a single keyword, e.g., 'S', all suffixes of 'S' are available to autocomplete the word. This seems excessive. In the future I would like to build in a feature that triggers the autocomplete functionality only when a minimum number of characters are entered, perhaps 3.
* Integrate Google Maps API so that a user can see the physical location of the airport 
* Sync a database and load the airport data into the database
* The present airport data is incomplete in two senses: first, for some of the airports no coordinates are provided. This data can be provided using Google Maps API: if a user requests information about an airport for which there are no coordinates, a call can be made to google maps' api using the name of the airport, the coordinates can be returned and in turn loaded into the database
* The second sense in which the present airport data is incomplete is this: currently there is data for roughly 2,500 US airports. However, there are roughly 15,000 US airports, at least as acknowledged by the FAA. To complete airport data, it looks like this site will need to be scrapped for data: http://www.aviationacres.com/USAirports.asp 
