CRUD Warmup DB

This is the first part of a 3-part warmup series where you will build a de-coupled Full Stack App.

You'll be using knex to create the migrations and seeds, and you'll deploy the DB to heroku.

Note: do NOT generate an express app in this folder. Only migrations, seeds and knex connection information should exist in this repo
Getting Started

Fork/clone this repo.

Choose a resource to CRUD on.

This repo has many examples to choose from, but feel free to choose anything that meets the requirements below.

DB Requirements

Must create an ERD for your DB first
Take a picture or screenshot of your ERD, and add it to this README file.
Must include a user table with at least these fields:
id
username
password
Must include at least 1 FK relationship
At least 1 table must include a FK user_id that points to the user table
Other FK are encouraged, but not required
Must be seeded with:
At least 1 user
Use this site to generate a bcrypt hashed password to seed your users with
At least 5 rows in your resource(s) table
Deploy!

After you have tested your migrations and seeds locally, you will deploy the DB to heroku.

Note that today we will only be deploying a DB.

Create a heroku app in the Heroku Dashboard
Add a postgres add-on
Copy DATABASE_URL env from Dashboard Settings -> reveal config vars
Add DATABASE_URL to local .env file
Add production connection settings to knexfile.js
Install dotenv and load the variables at the top of the knexfile.js
Migrate production
knex migrate:latest --env production
Seed production
knex seed:run --env production
Connect to heroku postgres DB with psql to see the fruits of your labor
heroku pg:psql --app heroku-app-name-here HEROKU_POSTGRESQL_COPPER
