# MySQL - ExpressJS - NodeJS - ReactJS (MERN) Authentication
Authentication website using express as a backend api fetching data from a MySQL database with Sequelize. This is accessed on the frontend with React that uses axios to fetch the api and register or login users. The home landing page displays all users in the database.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
What is needed to successfully run the website server.

#### NodeJS
To successfully install Node, open the following website URL and follow along with download instructions
`https://nodejs.org/en/download/`

To check if both Node and npm have been downloaded, type the following commands in your terminal
```
node -v
npm -v
```

## Installing
Begin installation process by either cloning the git repository or download it as a zip.

#### Clone with HTTPS
Use Git or checkout with SVN using the web URL.
`https://github.com/alexhansonn/mern-auth.git`

#### Directory
Make sure that the directory you cloned or downloaded the git respository to has been successfully created with all files present.

#### Installing Node Dependencies
To be able to successfully run the website servers, you are going to have to download some dependencies used in the project with the node package manager. To do this:

```
open folder hosting repository
copy the pathname
open terminal and type
cd {pathname}
```

Once the path has been entered in a terminal window, install server-side dependencies with the command `npm install`.
After completion, you will need to install the client-side dependencies by:

```
in terminal, move to the client directory with
cd client
next install the present dependencies with
npm install
```

If all has been completed successfully, your terminal will state that all dependencies have been installed with 0 problems.

## Running the server
To run both the server and client, a dependency has been installed called concurrently that will run both hosts with one command.

#### To run the server
Make sure that you have a terminal window open in the path directory of your installed repository.
Once there, type the following command:

`npm run dev`

This command will run your express application on `http://localhost:5000` and your react-app on `http://localhost:3000`

## Tada
There you have it. A fully functional MERN stack application that uses MySQL for user authentication.
