# Pokeverse Back-End
![pokeverse-high-resolution-color-logo](https://user-images.githubusercontent.com/80741556/222516797-c0cdca29-3bb2-4ac9-a103-478f7285f918.png)


## Overview

This project is designed to teach us and give us the opportunity to create our own back end from scratch. We picked up various skills like authentiction using bcrypt and hashing. 
What this project is meant to emulate is an app that stores all pokemon data, an encyclopedia of pokemon that can be updated. There are two types of users:
1. Trainers
2. Profesors
The trainers are normal useres who can only view the data in the pokedex.
The Professors are admins who can update the pokedex by adding new discovered pokemon, or if needed, deleting pokemon from the pokedex all while being able to change the attributes like height, weight and typing.


## Installation

To install this project, follow these steps:

1. Clone the repository using `git clone https://github.com/Poke-Verse/PokeVerseBackEnd`
2. Install the required dependencies using `npm install`

## User Endpoints (User GET Requests)

The endpoints we use for getting information on our registered users are:

1. "/"
This route is used to get all of the users registered in the database (only admins have access to this)

2. "/:id"
This route is used to get all of the users registered in the database by id

3. "/:name"
This route is used to get all of the users registered in the database by their name

4. "/:email"
This route is used to get all of the users registered in the database by their email address

## User Endpoints (User POST Requests)

1. "/register"
This route is used to register new users into the database

2. "/login"
This route is used to log users in

## User Endpoints (User PUT & DELETE Requests)

1. "/:id" (PUT Request)
This route is used to update a user using their id as pk

2. "/:id" (DELETE Request)
This route is used to delete a user using their id as pk

## Pokemon Endpoints (GET Requests)

1. "/"
This route is used to get all pokemon in the database

2. "/:id"
This route is used to get all pokemon in the database by id

3. "/name/:name"
This route is used to get pokemon in the database by their name

4. "/type/:type"
This route is used to get pokemon in the database by their type

## Admin Endpoints (GET Requests)

1. "/"
This route is used to get all Admins in the database

2. "/:id"
This route is used to get one admin in the database by their id

3. "/name/:name"
This route is used to get one admin in the database by their name

4. "/email/:email"
This route is used to get one admin in the database by their email



