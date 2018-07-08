# Neighborhood-Map-React

## Overview:

A single page app that uses React, Google maps and Foursquare to list some sightseeings of Athens,Greece.

## Technologies used:

* [Reactjs]
* [Foursquare API]
* [Google Maps JavaScript API]

### NPM scripts

- `npm run start`: runs the app in development mode
- `npm run build`: builds the app for production to the build folder

## To get started:

1. Clone this git repository

2. Go into the application folder

3. Now install all modules listed as dependencies in `package.json` by running the command `npm install`

4. Run the application with `npm run start`

**This will open a new browser tab/window with the application running.**

#### Important 

- The service worker is only enabled in the production environment. It's recommended that you do not enable an offline-first service worker in a development environment.
- If you need to **test your offline-first** service worker locally, build the application (using `npm run build`) and run a simple http server from your build directory.The service worker only works in production mode.

## Start the App in Production Mode:
* To run the App in production mode:
	`npm run build`
* Then:
	`python -m SimpleHTTPServer 3000`
* Then the App should run on [port 3000](http://localhost:3000)