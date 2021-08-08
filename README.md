This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start:server`

Runs the app server. This should be run first in order to work with the app.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run storybook`

In order to see Storybook for app components.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `npm test:e2e`

Launches Cypress+Cucumber runner for end 2 end tests,
**Note: Server and client both should be up and running**


### `npm test build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Answering to two questions

> What are the ways of evaluating FE performance?

Page Speed Index, TTI, First Contentful Paint
We can monitor these parameters using Lighthouse for example or if we have some monitoring tools like Dynatrace 
then it would also be possible to track the frontend performance

> What are the parameters to take into account before adding a new library to the project?

First if I already have some experiences with that library the it would be easier to decide whether that tool
is useful for that project or not. Then I check with other team mates to see what they have in their mind. Otherwise I will check community of the library to determine if there are 
already developers who actually use that and in case they can answer to questions also that's a tool 
we can rely on in terms of regular updates. I will check the size of library to make sure it doesn't increase our bundle size unnecessarily.