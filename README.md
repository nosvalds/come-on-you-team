# Come On You _____ ! 
- The football team randomizer app

## v1.0
### Background
The initial project brief was to create an app that takes 10 player names and randomly sorts them into two 5-a-side football teams. I set out to create a web app that met these requirements, but looked ahead to future functionality that I wanted to add. 

### Plan
I spent most of the first morning putting the ideas that had popped into my head over the weekend into notes and on paper in a drawing. Visually I wanted the players to be laid out on the screen with a football pitch background as I thought this would be a nice visual representation and would potentially give me the option of adding "formations" to further releases. 

As I was planning I split out the Minimum Viable Product (MVP) and "stretch" ideas. While I was designing the MVP, I tried to keep and eye out for places in the design and code that I could make things easily changeable and expandable for the future features I knew I wanted to pursure. 

As for technologies I decided to start with a React/Redux web application. I figured this was likely overkill for the MVP, but with my stretch goals would become more neccessary for the interactivity that I desired. Also looking through previous project examples I saw they were able to achieve good functionality with these technologies. I also penciled in the thought of creating a back end Laravel API to keep track of league progress over time. 

You can view my full design notes [here](./design_notes.md).


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Deploying to gitHub Pages
```bash
npm run deploy
```

- The above command uses the gh-pages package to deploy to gitHub pages. Script lives in package.json and runs:
```
react-scripts build
gh-pages -d build
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
