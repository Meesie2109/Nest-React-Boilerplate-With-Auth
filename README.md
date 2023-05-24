<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
<h1 align="center">
  Nest-React-Boilerplate-With-Auth
</h1>

## Getting Started

This repository is a boilerplate with auth for NestJS + React full stack applications using turbo, prisma and docker.

### Installation

_Installation process for the repository_

1. Clone the repo

   ```sh
   git clone https://github.com/your_username_/Project-Name.git

   ```

2. Install NPM packages
   ```sh
   npm install or npm i
   ```
3. Create a dotnev file
   ```sh
   POSTGRES_USER = DATABASE_USERNAME
   POSTGRES_PASSWORD= DATABASE_PASSWORD
   POSTGRES_DB= DATABASE_NAME
   DATABASE_URL=. DOCKER_DATABASE_URL
   ```
4. Setting up docker
   ```sh
   docker compose up dev-db -d
   ```
5. Migrate the the database using prisma
   ```sh
   npx prisma migrate dev
   ```
6. The repo is now ready to use

### Usage

_Basic commands and code examples for this repository_

Start the application

```sh
npm run dev
```

Building the application

```sh
npm run build
```

Running the build

```sh
npm run start
```

### License

Distributed under the MIT License.
