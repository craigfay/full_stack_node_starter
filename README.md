# Who is this for?
Anybody that needs to serve HTML content, but needs to inject dynamic values from a SQL database.

# Usage
* Install dependencies: `npm install`
* Run database migrations: `npm run migrate:latest`
* Run database seeding: `npm run seed:run`
* Start development server: `npm run dev`
* Visit at `localhost:3000/songs/1`

# Structure

* **migrations/**
  * Javascript files that dictate how to create an initial database schema.

* **seeds/**
  * Javascript files that dictate how to populate the database with initial records.

* **static/**
  * Any `.css`, `.js`, or other non-dynamic files that need to be served.

* **views/**
  * `.html` templates that can be injected with dynamic values when they're requested.

* **database.js**
  * Creates a connection to the database, and defines helper functions for accessing data.

* **knexfile.js**
  * Defines database configuration / connection settings.

* **server.js**
  * Starts an HTTP server, and defines how URLs map to static / dynamic content.


# Supporting Documentation
* [Express](https://expressjs.com/)
* [Knex](http://knexjs.org/)
* [Nunjucks](https://mozilla.github.io/nunjucks/)

