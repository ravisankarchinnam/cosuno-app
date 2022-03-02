# Cosuno Rest API

> This Sample API retrieves contractors and their specialities.

<p align="center"><img src="../cosuno-api.png" alt="styler gif" /></p>

<p align="center">
    <a href="https://cosuno-api.herokuapp.com/" target="blank">View Demo</a>
</p>

## Libraries

> - [Node.js](https://nodejs.org/)
> - [Express.js](https://expressjs.com/)
> - [Typescript](https://www.typescriptlang.org/)

## Features

> REST API created with node, express, typescript
> Endpoints:

> - GET /api/contractors -> get all contractors
> - GET /api/specialities -> get all specialties

## Installation Steps

> Please before run the app, take into account to have a nodejs installed in your local.

1. Clone the repository

```bash
git clone https://github.com/ravisankarchinnam/cosuno-app.git
```

2. Change the working directory

```bash
cd server
```

3. Install dependencies

```bash
yarn install
```

4. Create `.env` file in root and add your variables

```bash
PORT= YOUR_PORT
```

5. Run the app

```bash
yarn run dev
```

> You are all set! Open [localhost:3030](http://localhost:3030/) to see the app.

> `yarn run prod` - which generates a dist folder with all the files ready for the deployment in the same `server` folder.

## Deployment

> This API is deployed to heroku along with Swagger API Documentation, please use this endpoint [https://cosuno-app.herokuapp.com](https://cosuno-app.herokuapp.com)

## Enhancements

1. Integrate API with real database.
2. Implement Search Features (limit, sort, pagination, etc.)
3. Implement Session management
4. Implement CRUD Operations for Contractors
5. Implement CRUD operations for specialities
6. Implement Bidding system API

## Author

> Ravisankar Chinnam
