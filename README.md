# ARMS - Ashita Rent Management System

ARMS is a management system for renting apartments. There are the tenants and land-lord, who is the admin. The admin registers apartments on ARMS, a tenant who is interested in renting from this land-lord registers for an apartment. Each apartment has its own detail, describing the basic interior of the room - provided by the admin, the cost for a term - a term is three month.

## Dependencies

- dotenv
- ts-node
- typescript
- bcrypt
- cors
- express
- joi
- joi-password
- jsonwebtoken
- morgan
- morgan-json
- pg
- reflect-metadata
- typeorm
- winston

## Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

## How To Setup

- Create a `.env` file in the root folder, where `package.json` is.
- Put the database configurations in the `.env` file as done in `sample.env`.
- Create a database with the name `test_db` or as directed/passed in the `.env` file.
- Run `psql` on terminal to open the `psql` in interactive environment or console.
- Run `CREATE DATABASE test_db`, to create the database. (Use the name of the database passed in the `.env` file)
- Run database synchronization, `npm run sync-db`.
- Run server in development mode, `npm run dev`.
