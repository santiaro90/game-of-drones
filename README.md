# Game of Drones

In Game of Drones there are two players trying to conquer each other. Players
take turns to make their move, choosing Paper, Rock or Scissors. Each move
beats another, just like the game “Paper, rock, scissors”. Like so:

  - Paper beats Rock
  - Rock beats scissors
  - Scissors beat Paper

The first player to beat the other player 3 times wins the battle.

Check it out [here](https://santiaro90-gofd.herokuapp.com/)!

## Run development servers
### Requirements:
- `Node` version `^8.2.1`
- `yarn` version `^1.2.1`
- `MongoDB` version `^3.6.2`

### Install
- To install dependencies for every package, you need to run `yarn` in the root folder, as well as in the `server` and `client` folders.

### Start
- Run the MongoDB server on `PORT=27017` (check the [docs](https://docs.mongodb.com/manual/)).
- Run `yarn start:dev` in the root folder to start both the API and the application servers.
- If the browser doesn't open automatically, just go to `http://localhost:3000`.

## Licence
[MIT](./LICENCE.md)
