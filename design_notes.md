
## MVP
- Form input, click button to add player, randomly places player on the field (only 5 v. 5)

## Stretch Ideas
- Change # of players per side
- Setting team names
- Male/Female and Skill balancing
- Build league history over time
- Scoring per game
  - Only enter for end of game
- Could also do scoring w/ timer
- Add weather widget

- DevOps
   - Terraform to setup AWS
   - Ansible for provisioning
   - Capistrano to deploy code
   
## Created drawing/wireframe on paper

## Tech Stack Plan
- Start with React/Redux UI
  - Initially probably not neccessary for Redux, but I plan to make it more complexity and add functionality
- Plan to add a Laravel API back-end for keeping track of game history and statistics, allowing re-load.

### State Example/Structure
```js
{
 teamSize: 5,
 editTeamName: true,
 teamA : {
  name: "Team A",
  playersFilled: 0,
  players: [
      { 
        name: "Billy"
        position: "GK"
      },
      { 
        name: "Bob"
        position: "D"
      }, 
      ...
  ],
 teamB : {
  name: "Team B",
  playersFilled: 0,
  players: [
      { 
        name: "Billy"
        position: "GK"
      },
      { 
        name: "Bob"
        position: "D"
      }, 
      ...
  ],     
}
```

### Reducer Actions
- "ADD_PLAYER"
  - Dispatched when initially adding players to the pitch

- "SET_TEAM_SIZE"
  - Dispatched when setting the team size

- "SET_TEAM_NAMES"
  - Dispatched when setting the team names

- "EDIT_TEAM_NAMES"
  - Dispatched when a team name is clicked on to show the form to edit team names

- "SHUFFLE_TEAMS" 
  - Dispatched when randomly shuffling teams

- "RESET"
  - Displatched to "start over" or start a new match

### React Components
#### Complete
- Title Bar/Header
- Team Size Bar
- Player entry bar
  - Form, Inputs + Add button
- Team Name Bar/Pitch Header
- Pitch
  - PitchSection x 4
- Footer
  
#### Future:
- Team Scores/Save
- Game History Display

## Back End
- Goal - save match history

### DB Structure
#### Table
- match
  - id
  - team_size
  - team_a_name
  - team_b_name
  - team_a_score
  - team_b_score
  - timestamps

### API

### Standard Response

- `id`
- `team_size`: integer - number of players on each team
- `teamA`: object - team A object
    - `name`: string - name
    - `score`: string - score
    - `won`: bool - has this team won?
- `teamB`: object - team B object
    - `name`: string - name
    - `score`: string - score
    - `won`: bool - has this team won?

### End Points

#### `GET /come-on-you-team/matches`

All of the matches that have been played, with the latest match first.

#### `GET /come-on-you-team/match/<id>`

The specified match

#### `POST /come-on-you-team/match`

Save a new match of football

##### Request

- `team_size`: integer - number of players on each team
- `teamA`: object - team A object
    - `name`: string - name
    - `score`: string - score
    - `won`: bool - has this team won?
- `teamB`: object - team B object
    - `name`: string - name
    - `score`: string - score
    - `won`: bool - has this team won?


#### `DELETE /come-on-you-team/games/<id>`

Delete a game of football

   
