<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Datos de Prueba:

- Queen, Reino Unido
rock
A Night at the Opera, 6 November 1975
Bohemian Rhapsody, 5:52, classic rock rock queen 70s, https://youtu.be/fJ9rUzIMcZQ

- Michael Jackson, Estados Unidos
post-disco R&B poprock
Thriller, 30 November 1982
Thriller, 3:21, music pop 80s, https://www.youtube.com/watch?v=4V90AmXnguw 

- Adele, Reino Unido
Pop Soul Rhythm and blues R&B contemporáneo
21, 24 enero 2011
Rolling in the Deep, 3:54, https://www.youtube.com/watch?v=rYEDA3JcQqw

- Led Zeppelin, Estados Unidos
rock
Led Zeppelin IV, 8 noviembre 1971
Black dog, 2:26, classic rock 70s, https://www.youtube.com/watch?v=y8OtzJtp-EM

- Il Divo, Reino Unido
crossover clásico
Ancora, 7 noviembre 2005
I Believe in You, 4:05, música opera lírica, https://www.youtube.com/watch?v=0qAHHSGVjFg

- Zezé di Camargo y Luciano, Brasil
música sertaneja y baladas románticas
Double Face, 26 julio 2010
Esse amor não valeu, 3:15, música brasileña romántica, https://www.youtube.com/watch?v=4C0RiBsDPjg

## Config Database
```bash
CREATE DATABASE db_iac;
CREATE USER 'usriac'@'localhost' IDENTIFIED BY 'Passw0rd';
GRANT ALL PRIVILEGES ON db_iac.* TO 'usriac'@'localhost';
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

$ sudo nano /etc/default/docker y añadir DOCKER_OPTS="--iptables=false"
$ sudo systemctl restart docker
$ sudo systemctl restart ufw

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
