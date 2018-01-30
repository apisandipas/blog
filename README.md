# Redux Blog.
This is a blog/cms comprised of two parts. A JSON api and an isomorphically rendered client.
This is still largely a Work In Progress.

## Set up

### API Setup
1.  `cd` into api/ and run `npm install`
2. Copy sample.env to .env and fill in local database credentials
3. Run `knex migrate:latest` and `knex seed:run`
4. Run `npm run dev`

### Client Setup
1. `cd` into client/ and run `npm install`
2. Open browser to `localhost:3002`

## Usage

### API Usage
The api exposes the following endpoints:

@TODO: write api docs. Look at Express router for routes

### Client usage
The client currently has the following routes:
* / - Home page of blog. Shows the first 10 posts. Pagination not yet implemented
* /posts/:id - Single post view
* /login - Login page, login not yet implemented
* /register - Registration Page. Functionality not yet implemented