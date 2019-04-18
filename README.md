# Jump Tracker API

# <img src="https://image.flaticon.com/icons/png/512/1419/1419343.png" alt="drawing" width="50" height="50"/> Jump-Track

Full-Stack web application used for tracking and improving your vertical jump.

## Backend

#### API [Base Url](https://jump-tracker.herokuapp.com/)

## Technologies

Production
- Node.js
- Express
- Knex
- SQLite
- Postgres
- Bcrypt
- Cors
- JSON Web Token
- Knex Cleaner

Development
- Cross Env
- Jest
- Nodemon
- Supertest

## Setup

```
git clone <repo>
yarn
yarn server
```

# Testing

```
yarn test
```

# Endpoints

|    Table    |        Endpoint      |    Method      |       Request / Response Payloads                                                                |
|-------------|----------------------|----------------|--------------------------------------------------------------------------------------------------|
|    Users    |    /users/login      |     POST       |     username as `string`, password  as `string`                                                  |
|    Users    |    /users/register   |     POST       |     username as `string`, password  as `string`                                                  |
|    Goals    |    /goals/           |     POST       |     jumpHeight as `number`, target as `number`                                                   |
|    Goals    |    /goals/           |     GET        |     jumpHeight as `string`, startDate as `string` targetDate as `string` completed as `boolean`  |
|    Goals    |    /goals/:goalId    |     PUT        |     completed as `boolean`                                                                       |
|    Goals    |    /goals/:goalId    |     DELETE     |                                                                                                  |
|  Exercises  |  /exercises/:goalId  |     POST       |     exercises as `string`                                                                        |
|  Exercises  |  /exercises/:goalId  |     GET        |     exercises as `string`                                                                        |

## Maintainer
- Shaun Carmody -_initial work_- [shaunmcarmody](https://github.com/shaunmcarmody)