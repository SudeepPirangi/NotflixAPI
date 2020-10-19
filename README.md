## NotflixAPI

- Contains all the APIs for Notflix app which is built on React framework.
- These APIs are built using NodeJS, Express, MongoDB.
- Hosted by Heroku from Github repository.

Production URL: [https://notflix-node-api.herokuapp.com](https://notflix-node-api.herokuapp.com)

## Deployment Notes

This app deployment is directly connected to Sudeep's Github repos.

Everything that is pushed to [NotflixAPI/master](https://github.com/SudeepPirangi/NotflixAPI.git/master) branch are auto-deployed to Production.

## Deployment Configurations

Add `engines` entry in `package.json` file to mention node version used for development.

```
"engines": {
  "node": "12.x"
}
```

Create a `Procfile` in root folder for instructing Heroku what to run as `web: node app.js`

Always deploy to `dev` or `test` branch. Only the Production code should be placed in `master` branch.
Every code push to `master` branch will be auto-deployed to Heroku Cloud.

## Production Checks

Do not forget to add environment variables in Heroku Dashboard for `notflix-node-api` app.

### Run in local environment with nodemon & process.env variables

`npm run start:dev`
