## Distance Calculator —— Airport to Airport

#### Running the app:

This is a Node.js app that calculates the distance between any two US airports in nautical miles and supports an airport search with autocomplete. To run the app locally, run the following commands on the command line:
  ```
  npm install
  npm run build
  npm start  
  ```

Then go to http://localhost:1337/ in your browser.

#### Techs used in the app:

The app is a single-page Javascript application that runs on Node using the express.js module. The front-end views are built in React and Redux (and several supporting libraries like react-router or react-dom) and are bundled together with Webpack. Babel transpiles ES6 to ES5 for browser compatibility. 

The core functionality of the app——the search/autocomplete and the distance calculator algorithm——are hand-built. They are located at `app/utils`. The distance algorithm is an implementation of the "haversine" formula. The airport search/autocomplete was made possible through an implementation of the Trie data structure: at each user character stroke a new string is created, which is then searched for within the Trie; an autocomplete method then supplies all suffixes for the given string through a depth-first recursive traversal over the relevant sub-Trie. 

#### The API 

The API for this app is very simple, since all it needs to do is serve up to the client the catalogue of US airports. This is what the route at `server/api.js` does. 

This app was not built to be connected to a database, though it could if further types of data needed to be stored. A pseudo-database is provided in the directory `airportData`, which holds data on roughly 8,800 airports worldwide and some algorithms for cleaning up the data and filtering for only US airports. In addition to the names of the airports (which are kept in distributed form as nodes in the Trie), the Trie also stores coordinate data for each airport, which is necessary for the calculator function. 

When the user goes to http://localhost:1337/, the API call is automatically made and all data is served up to the client and kept in the redux store in a Trie.

#### React/React-Redux

The application's main page has four elements: an input field for the first airport, an input field for the second airport, an output field for the calculated distance, and a header. Each of these elements is represented as its own react component; they are woven together at `app/components/Home.js`. The first three components are all connected to a redux store, so React will call for a re-render if the reducers to which each component is connected undergoes a change. 

As stated in the previous section, when the user comes to the app, a Trie holding all airport names is set in the redux store. When a user enters characters into an input field, the string formed by those characters is dispatched to the redux store, where it triggers a calling of the `autocomplete` method on the Trie kept in the store (for this logic, see for example `app/reducers/FirstAirportSet`). `autocomplete` generates an array of airport names, and this array is set in the redux store. 

As stated just above, the input and output fields are all connected to the redux store. The inputs are connected to the store such that they will render a drop-down menu containing the names of all airports generated with the `autocomplete` method. A user can then either finish typing out the name or select from the list. 

When the user selects an airport, the related coordinate data is taken from the Trie and set on the store (see for instance `app/reducers/FirstCoordinates`). When the store receives two sets of coordinates, the implementation of the haversine formula is triggered, and its return value is automatically displayed in the `Distance` component (see `app/components/Distance`).
