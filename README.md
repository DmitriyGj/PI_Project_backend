# Meeting manager / Менеджер встреч (Backend)

- RESTful API
- API запросы 
- Фильтрации
- Регистрация 
-	JWT-авторизация (+Keycloack)*
-	Ролевой доступ к API
-	Ролевой доступ
-	CRUD по встречам
-	API для графиков на основе отчетной информации (посещаемость встреч, частота проведения встреч)

# Папочная структура
## controllers/@controllers - папка с контролерами сущностей, в них связываются сущности и методы HTTP
## middlewares/@middlewares - папка с общими промежуточными функциями, которые чаще всего используются для проверки авторизоваости пользователя
## models/@models - модели для работы с typeorm
## providers/@providers - папка с провайдерами (сервисами) - сервисы, репозитории, фабрики, хелперы для работы с бд

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

## Description/Описание

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Подготовка к развертыванию проекта проекта 
Для работы необходимо установить последнюю версию [NodeJs](https://nodejs.org/en/) 
Также должны быть установлены глобально пакетные менеджеры yarn или npm 
Чтоб установить глобально **npm**, выполните команду в консоли 
```
npm i -g  npm 
```
Чтобы установить глобально **yarn**, выполните команду в консоли 
```
npm i -g yarn 
```

## Развертывание проекта

1. Склонировать репозиторий командой в консоли
```
git clone https://github.com/kzagul/pi_project_backend.git
```
2. Открыть папку в терминале и ввести команду 
```
cd pi_project_backend

``` 
3. Для сборки .node_modules выполните команду
```bash
$ npm install
```
Или
```bash
$ yarn install
```
5. Чтобы запустить проект нужно выполнить команду 
```
npm run start 
``` 
4. Проект развернется на localhost:3000

## Запуск приложения

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Правила создания и именования веток и наполнения коммитов
1. Cоздается ветка на основе develop 
2. Название ветки будет строиться таким образом: [feature | fix]/[branch_name]/[key], где key является номер задания, поставленного в битрикс24.

## Порядок работы 
1. Создаете ветку соответствующую своей задаче
2. 
```
git add . 
```
3. Коммиты - контрольные точки, старайтесь не делать коммиты слишком большими
Не более 200 изменений на коммит
```
git commit -m 'текст комментария - кратко описать что уже было сделано'
```
В случае если хотите отменить изменения воспользуйтесь командой 
```
git stash
```
Или можете перепрыгнуть на последний коммит при помощи команды 
```
git checkout [commit_hash]
```
ну или вовсе отменить последний коммит, где n - количество коммитов 
```
git reset HEAD~[n]
```
4. Если изменения еще ни разу отправлялись на сервер командой, то загрузить изменения можно следующей командой 
```
git push --set-upstream origin [branch_name]
```
Иначе 
```
git push
```
5. После того как, выполните задачу создаете pull request в develop, ревьюером ставите kzagul, DmitriyGj

## Небольшие рекомендации
1. Не пытйтесь писать много разных действий в одну строчку - это ухудшает перфоманс вашего кода
2. Выносите повторяющиеся действия в вспомогательные функции (папка utils)
3. Для создания новых сущностей удобно использовать nest-cli
4. 

## DB
1. DB_backup - файл базы данных
2. При помощи восстановления базы данных загружаем базу данных 
3. Запускаем базу, развертывается по адресу 'localhost:5432'

## Feature 
1. Микросервисная архитектура
2. Создать контейнер с фронтом
3. Деплой на сервер Heroku
4. Использование переменного окружения .env

## Test/Тестирование

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support/Поддержка

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Оффициальная документация - [nestjs.com](https://nestjs.com/)
- Оффициальная документация (на русском)  - [nestjs.ru.com](https://nestjs.ru.com/)

## License

Nest is [MIT licensed](LICENSE).
