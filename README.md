# Sumdrill the diary

Summing and multiplying negative and positive numbers "game".

Uses redux and react-redux to handle state. Backend is node express + postgres. Knex is used for building queries and making migrations. React-bootstrap is used for cool looks.

Backend Express server acts as an api + serves the built React app.

Hosted at Heroku: [https://sumdrill-production.herokuapp.com/]

## Starting development environment

In the project root:
```
docker-compose build
docker-compose up
```
Docker compose boots up three containers: frontend, backend, and Postgres.

## Deployment

Push to master will deploy to staging at Heroku: [https://sumdrill.herokuapp.com/]. Production deployment is done in heroku by "promoting" the staging to production.

## API-key

Just for the fun of it, requests for the backend needs an API key, although this does not make sense, since the API key must be hardcoded into the frontend code so the key is basically accessible to anyone. Another approach was to use npm Cors package and tune it so that it allows requests only from a specific host, but the implementation was uglyish so I left it out, and this is a toy app.

## Wiping out the HighScores

Just send a delete request to endpoint ```/api/v1/scores```.

### Weird stuff / bugs / features
* See key "proxy" key in package.json (frontend). It uses "postgres" instead of localhost (?).
* Sometimes it seems that the high score list is not updated
* If someone else is playing the game at the same time, the highscore lists are not in sync. Todo: learn web sockets.

