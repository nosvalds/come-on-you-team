
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

### State
```js
{
 teamSize: 5,
 teamA : {
 	name: "team A",
    positions: [
        { id: 
          name:
        },
        { id: 
          name:
        }, 
        ...
    ],
 teamB : {
 	name: "team B",
    positions: [
        { id: 
          name:
        },
        { id: 
          name:
        }, 
        ...
    ],     

}
```


### Reducer Actions
- "ADD_PLAYER"
- "RESET"

### React Components
- Title Bar/Header
- Game/Player entry bar
  - Form, Inputs + Add button
- Field
  - GK
  - 4 x Players
  - GK
  
Future:
- Team Details/Scores
- Game History

   
