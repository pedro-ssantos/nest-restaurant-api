<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

# nest-restaurant-api

## Description

Creates and secures a feature-complete API, which lets clients perform data operations on a mock restaurant menu.
Stores data in dynamic mem;
Uses "class-validator" and "class-transform" to validate input form.
Uses JWT, AuthO and passport to authorization.

  ### Source: [Developing a Secure API with NestJS](https://auth0.com/blog/developing-a-secure-api-with-nestjs-getting-started/?_ga=2.105622219.934537212.1604081434-2088793735.1604081433)
  
  ### Dependencies:
```bash
    "@nestjs/common": "^7.0.0",
    "@nestjs/core": "^7.0.0",
    "@nestjs/passport": "^7.1.0",
    "@nestjs/platform-express": "^7.0.0",
    "class-transformer": "^0.3.1",
    "class-validator": "^0.12.2",
    "dotenv": "^8.2.0",
    "jwks-rsa": "^1.11.0",
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0",
    "reflect-metadata": "^0.1.13",
    "rimraf": "^3.0.2",
    "rxjs": "^6.5.4"
```
  
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## License

  Nest is [MIT licensed](LICENSE).

