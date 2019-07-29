# Solar Farm Dashboard

A dashboard to monitor solar farm energy production using fake solar panels data generator and real weather API data.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Live demo
[https://solar-farm-dashboard.websulik.now.sh](https://solar-farm-dashboard.websulik.now.sh)

## Usage
### Configuring weather API key 

Please configure your [Planet OS API](https://data.planetos.com/) key named `weatherApiKey` in `config.js` file in order to use real weather forecast data.

Mock data for weather forecast is also included. The App falls back to mock data if fetchinig data from weather API fails.  


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

