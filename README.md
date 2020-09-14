# full stack challenge
Repositório back-end do [desafio](https://github.com/geekdevs-br/fullstack-challenge) para full stack na cresça mais

### Como rodar

Clone o repositório para sua maquina

`git clone https://github.com/luisfscoelho/fullstack-challenge.git`

Entre no projeto

`cd fullstack-challenge`

Crie um container docker para o postgres

`docker run --name api-pg -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

Instale os pacotes da aplicação

`yarn`

Execute as migrations

`yarn typeorm migration:run`

Rode a aplicação com o comando

`yarn dev:server`

### Tecnologias usadas

- Node
- TypeScript
- express
- JWT
- typeorm

### Rotas

| route           | method | auth | params    | body                                  |
| --------------- | ------ | ---- | --------- | ------------------------------------- |
| /users          | POST   | NO   |           | name, email, password                 |
| /users          | GET    | YES  |           |                                       |
| /courses        | POST   | YES  |           | title, price, workload, lessons, year |
| /courses        | GET    | NO   |           |                                       |
| /courses/       | GET    | NO   | course_id |                                       |
| /courses        | PUT    | YES  | course_id | title, price, workload, lessons, year |
| /courses        | DELETE | YES  | course_id |                                       |
| /sessions       | POST   | NO   |           | email, password                       |
| /favorites      | POST   | YES  |           | course_id                             |
| /favorites      | DELETE | YES  |           | course_id                             |
| /favorites/user | GET    | YES  |           |                                       |
