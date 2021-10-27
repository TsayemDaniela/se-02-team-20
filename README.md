# Beer Game First sprint

## Overview

<p>Our goal during this iteration was to set up a good developing environment, as well as take the first steps towards development. For frontend, we have used React, while for the backend we have used Django.  We tried to implement the login and registration of both the instructor and the player, as well as a simple main page. We have worked with both of them and have managed to finish work in both directions. So in the frontend, we have set up the environment, created and styled the pages. In the backend, we have created the tables for both the instructor and the player, as well as set up the code for registering, where the email and password is saved in the database, as well as logging in, once you are registered. Note that we have not connected the frontend with the backend, as creating the API was taking a bit more time. In order for testing to work, we created the forms in Django with plain HTML, to show that the backend was working. In any case, we think keeping them separate is important.<p> 

[Here](https://www.forbes.com/sites/forbestechcouncil/2018/07/19/seven-reasons-why-a-websites-front-end-and-back-end-should-be-kept-separate/?sh=13a6788c4fca) are a few reasons why. Furthermore, we wanted to use React for frontend, as it's easier to work with in bigger projects. In any case, as mentioned above, we have also implemented the forms with plain HTML, in Django and the login and registration works fine. So, if the other teams don't want to use React, they can start from there, but they will have to style everything by themselves.


## Software Requirements
## Frontend

### Main components
We have implemented 4 pages overall, the main page, the login, the registration and a welcome page for the players. The main page has a 
brief description of the game and two buttons, that take you to the login and registration page respectively. Both the login and registration page consists of forms, which ask for email, password and the type of user, as a radiobutton. The radiobuttons are there, as a way to differentiate between the UI rendered after they login, since players and instructors would have very different interfaces. They are also saved in different tables in database, so an instructor can only register as player and have two accounts with the same email.

We have also set a welcome page for the players, where the player is redirected after he/she logs in. The player can decides whether he wants to create or join a game. There are two different forms for this, but since we didn't want to have two different pages for that, we used a tab. The tab for 'Creating a game' has a form with all the things that the user has to set up for the game. 

Note that for the login and registration page we handle the states of email and password fields, but we don't do so for \player page, so the states in that page are not saved, as we didn't deal with functionality in that page.

### Styling
We have integrated Bootstrap with the project. We have also integrated Font Awesome with the project though we have not used it at the moment. For the fonts used we have integrated font family 'Montserrat' with weight 300 and 'Inter' with weight 300 and 400 from Google Fonts. We tried to keep orange and grey as the main colors for the pages implemented, but we have not styled the \player page, as that's one of the pages that shows up after logging in, as we thought that there might be some room for style change and the other team can work the way they want with that.

### Routes
We have imported BrowserRouter, Route, Switch  from "react-router-dom", in order to have some form of routing between pages easily. All you need to do when creating a new component is importing it in the App.js file and create a new Route for it. Please refer [here](https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router) to read more about it.

### Testing
For testing the frontend, we have used Enzyme and Mocha. I have checked [this](https://medium.com/@tatismolin/testing-your-react-app-with-mocha-chai-and-other-beverages-e9a16ca7b9bb) for setting the environment. The only issue is that we're using version 17 of React and for that, there's not currently an enzyme adapted. We have used [this](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17) as an enzyme adapter for version 17 package, but note that this is not official. We also needed a [Babel](https://babeljs.io/docs/en/) configuration file, so we added it (babel.config.js). 

Since we have not connected the frontend and the backend together, there wasn't something that we could check in terms of functionality for the frontend, but in order to show that the tests can be run and the environment is set up correctly, I have tested the presence of some components in the login page. 

### Deployment
In order to run the React App in your computer you have to follow this steps.

Clone the repository in your machine, by running

    git clone https://github.com/lorenzorota/se-01-team-20.git

Next, if you don't have npm installed in your computer, run 

    npm install

After that you should basically be set and you can run

    npm start

to start the project and you get redirected to the main page. 

Now, we have also used some dependencies that you need to have installed for the app to work properly:

For the [routes](https://www.npmjs.com/package/react-router-dom), we have imported form the react-router-dom, which you can install running

     npm install --save react-router-
     
For the tab in the \player page, we have imported Tabs from "@feuer/react-tabs". To install it locally run

    npm install @feuer/react-tabs

Now for the testing part, you have to run

    npm test

Even though, you would have to install some dependencies initially. Run

    npm install mocha --save-dev
    npm install chai chai-enzyme --save-dev
    npm install enzyme --save-dev
    npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
    npm install @babel/core @babel/register --save-dev
    npm install babel-preset-react-app-babel-7 --save-dev
    npm install @babel/plugin-transform-modules-commonjs --save-dev
    npm install babel-plugin-inline-react-svg --save-dev
    npm install babel-plugin-inline-react-svg --save-dev
    npm install ignore-styles --save-dev
    
## Backend

### Starting Instructions

Please run 


    python manage.py runserver
after navigating into the folder where manage.py is located to start the app. Go to your browser and go to http://127.0.0.1:8000/beer_game/ for the app and http://127.0.0.1:8000/admin for the Django administration page.

### Database used

We opted to use the university provided clamv database. We have made the connection in the settings.py in the Databases object. Since we don’t have access to create databases, we decided to use the database we had from the databases and web services course.

### Creating the App

django-admin startproject beer_game_backend creates our project and the basic, necessary files needed to create applications inside our project.

python manage.py startapp beer_game creates the app inside our existing project

Models dynamically create tables and their attributes in our database so there is no need for the user to manually go to the database and create the tables.

There are two url files, one in the outer folder of the project and one in our app. The outer urls.py serves as a general guideline / separation between our app and the django admin page. The one inside our app serves as a routing function to different views.

### Implementation

What we have implemented is a basic register and login page. When a user signs up, he is given an option between signing up as an instructor or player. There are two tables in our database for user credentials, one for instructors and the other for players. Depending on the choices of the user during sign-up, the credentials will be stored in the appropriate table.

In the homepage we have the list of instructors who are registered on the platform.

Both the instructor and player credential tables are added to the django admin page through admin.py for easier access and visualization purposes.

### Testing

We have a total of 11 tests. Run the following command to run them all. If an OK is returned it means that they have all passed the test cases.

    python3 manage.py test beer_game 

We have implemented testing for the urls and views. The urls are tested by , tests/tests_url.py, supplying a url fragment and watching to which view it directs. This means that the server or database don’t need to be running in order for the url tests to take place. On the other hand, the view tests, tests/test_views.py, require the server and database to run. They test response code for GET and POST requests. 200 is OK.

### Important directories, paths and content for beer_game_api

beer_game_backend: app

tests : contains the testing python scripts

views.py

models.py

urls.py : app urls

admin.py : django admin

backend: project settings

urls.py : project urls

manage.py 

# Beer Game Sprint #2
Team: Hamza Hayak, Daniela Dzuesso Tsayem

## Usage
The package.json should contain all the required packages required for the web app.
cd beer_game_frontend/
npm install

Start the backend first:
cd beer_game_api/backend
python manage.py runserver

To run the web app:
cd beer_game_frontend/
npm start

## Frontend
* We completely re-designed the landing page and the registration page. 
* We have introduced the MaterialUI package and separated the registration page for instructors and players. 
* We added method, action and required attributes to the registration and login pages. 
* We populated the Main.css file. 
* We edited the App.css to suit the changes made.

## Backend
* The initial implmentation of the backend was really designed to work on its own, without considering that it was going to be "injected" in React. So, we re-worked the Django    project and simplified its views and models. We also added some comments. There is currently only one test. We were short on time and couldn't implement more.
* The main models are now Instructor and Player. Both these models have a User member which is a OneToOneField to a user in the Authentication table provided by Django. This way we can handle authentication natively and have extra specific fields for each models.
* Creating a new Player or Instructor automatically creates a new User with the provided email and password (the username takes the value of the email, for the sake of simplicity)
* We have created a single Admin class responsible for managing both models.
* In order to make backend calls in React, we are using the package "axios" that send requests to "/api/..".
NOTE: The backend is still using a local database, because we encountered issues connecting to the DB through Django (Permissions missing)
