# Come On You _____ ! 
- The football team randomizer app

## Backend 
https://github.com/nosvalds/come-on-you-team-db

## v1.0
### Background
The initial project brief was to create an app that takes 10 player names and randomly sorts them into two 5-a-side football teams. I set out to create a web app that met these requirements, but looked ahead to future functionality that I wanted to add. 

### Plan
I spent most of the first morning putting the ideas that had popped into my head over the weekend into notes and on paper in a wireframe. I wanted the players to be laid out on the screen with a football pitch background as I thought this would be a nice visual representation and would potentially give me the option of adding "formations" to further releases. 

As I was planning I split out the Minimum Viable Product (MVP) and "stretch" feature ideas. While I was designing the MVP, I tried to keep and eye out for places in the design and code that I could make things easily changeable and expandable for the future features. 

As for technologies I decided to start with a React/Redux web application. I understood this was likely overkill for the MVP, but with my stretch goals would become more neccessary for the interactivity that I desired. Also looking through previous project examples I saw they were able to achieve good functionality with these technologies. I also penciled in the thought of creating a back end Laravel API to keep track of match scores over time. 

You can view my full design notes [here](./design_notes.md).

## v2.0
### Features
- [x] Pick # of Teams per side
- [x] Ability to change team names
- [x] Update game flow due to above changes
- [x] Start Over and Shuffle buttons
- [x] Refactor Offense/Defense/Goal components to be one "Pitch Section" re-useable component
- [x] Make Mobile-friendly and responsive

## v2.1
### Fix/Update
- [x] Fix game flow after user feedback
  - Don't display "Teams Filled, Game On" until team names are filled out by the user
  - Display direction to fill out team names when team names are in edit mode

## v3.0
### Planned Features/Work
- [x] Back-end Laravel API to save match history
- [_] Front-end updates to support GET/POST/PUT/DELETE requests for saving and displaying match history
  - [x] React/JSX component to display match history from test data in state
  - [_] React Router set up for navigation between match play and history
  - [_] Axios set up
  - [_] GET request for full match history, DELETE to remove a match from the history
  - [_] React/JSX component to record score
  - [_] POST request to save a completed match to the DB
  - [_] PUT request to "save" a match mid-match
- [_] Adding more visual icons/images for fun
- [_] Update documentation for how to run this project

## Lessons Learned
- Planning is critical and thinking ahead for future functionality/releases is important in the design. This can make starting out and getting an MVP running more work that you expect, but will be worth it in the end.
  - E.g. I'm storing the players names in an array of objects like { name: "Name" }, which represent each player, rather than just an array of player name strings. This will allow me to add more information about the players in the future (age, height, skill, etc.)
- It's okay to scrap design ideas or architecture you originally thought was going to be neccessary.
- Getting feedback from someone not familiar with the app is really useful. I had my girlfriend play and she told me that it wasn't clear on mobile when you should be editing the team names. This pushed me to release v2.1 that clears this up.

## Running this Project Yourself:

1. Clone the repository to your local machine by running the following commands in your terminal
```bash
git clone git@github.com:nosvalds/come-on-you-team.git {project-directory}
```ap
2. In your terminal cd into the project directory and run the below npm command to install neccessary dependency packages
```bash
cd {project-directory}
npm install
```
3. In your terminal run a local development server to view on your local machine
```bash
npm start
```

4. You should see a message like this when the development server is up and running.
```bash
Compiled successfully!

You can now view come-on-you-team in the browser.

  Local:            http://localhost:3000/come-on-you-team
  On Your Network:  http://192.168.0.96:3000/come-on-you-team

Note that the development build is not optimized.
To create a production build, use npm run build.
```
5. Navigate to the "Local" URL from above in your favourite browser

## Deploying to gitHub Pages
If you'd like to deploy this page from your own gitHub repository you can follow the below steps:
1. Fork the Repo
2. Update your package.json file with this line for your new repo:
```
"homepage": "https://{github-username}.github.io/{repo-name}/"
```
3. Run the below command
```bash
npm run deploy
```

The above command uses the gh-pages package to deploy to gitHub pages. The script definition lives in package.json and runs:
```
react-scripts build
gh-pages -d build
```

# Create React App documentation
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
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
