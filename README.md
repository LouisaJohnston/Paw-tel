# Pawtel - Client

## Description

Paw-tel is a full-stack application utiltizing MERN. In this application, users are able to create profiles for their pets, view housing options for their pets, and assign their pets in a "home-away-from-home" of their choosing.

## User Stories

* As a user (AAU) I want to be able to create, edit or delete a profile for my pet with their needs (medicines, care guidelines etc)
* (AAU) I want to be able to be able to find an appropriate “pet air bnb” in Seattle for my pet. 
* (AAU) I want to be able to browse and favorite housing profiles.

## Images

![main](/public/img/homepage.PNG)
![main](/public/img/register.PNG)
![main](/public/img/petpage.PNG)

## Installation

* Fork and clone both the client and server repos
* npm install packages and dependencies

## Routes
### RESTful routing chart for Pet Hotel Hosts
| Method | URL | Functionality | view |
|--------|-----|---------------|------|
| GET | localhost:3000/api-v1/users | Get all users (admin) | redirect to /users
| GET | localhost:3000/api-v1/users/:id | Get single user by id (admin) | redirect to /users/:id
| POST  | localhost:3000/api-v1/users | Add user to database (admin) |  redirect to '/profile'
| PUT  | localhost:3000/api-v1/users/:id | Update user in database (admin) |  redirect to '/users/:id'
| DELETE | localhost:3000/api-v1/users/:id | Delete user from database (admin&userProfile owner) | redirect to '/users'

### Authentication RESTful routing chart for Pet Owners
| Method | URL | Functionality | view |
|--------|-----|---------------|------|
| POST | localhost:3000/api-v1/register | Add user to database with encrypted password | redirect to /auth/register
| POST | localhost:3000/api-v1/auth/login | validate users input to the database | redirect to /auth/login
| GET | localhost:3000/api-v1/auth/user | if find get it from the db | redirect to /profile
| POST | localhost:3000/api-v1/auth/forgetpassword | Generate password token and send email | redirect to /forgetPassword
| PUT | localhost:3000/api-v1/auth/resetPassword/{token} | Reset user password via token | redirect to /auth/resetPassword
| PUT | localhost:3000/api-v1/auth/updatePassword | Update logged in user password, send in the body currentPassword and newPassword | redirect to /auth/updatePassword
| GET | localhost:3000/api-v1/auth/logout | Clear token cookie | redirect to '/'.

### RESTful routing chart for Users/Pets
| Method | URL | Functionality | view |
|--------|-----|---------------|------|
GET | /pets | Displays the user's pet list | Render pets
POST | /pets | Adds a pet to the user's pet list via a form | Redirect to /pets
GET | /pets/:id | Show details about a specific pet from the user's pet list | Render pets/:id
PUT | /pets/:id | Updates a specific pet's information | Redirect to /pets/:id 
DELETE | /pets/:id | Removes a pet from the user's pet list | Redirect to /pets

### RESTful routing chart for Hotels
| Method | URL | Functionality | view |
|--------|-----|---------------|------|
GET | /hotels | Displays the ho's hotel list | Render hotels
POST | /hotels | Adds a hotel to the host's hotel list via a form | Redirect to /hotels
GET | /hotels/:id | Show details about a specific hotel from the host's hotel list | Render hotels/:id
PUT | /hotels/:id| Updates a specific hotel's information | Redirect to /hotels/:id
DELETE | /hotels/:id | Removes a pet from the host's hotel list | Redirect to /hotels/:id

## Database Schema

![main](/public/img/wireframes/schema.PNG)

## Wireframes
![main](/public/img/wireframes/petsprofile.png)
![main](/public/img/wireframes/petprofile.png)
![main](/public/img/wireframes/hotelprofile.png)
![main](/public/img/wireframes/hotellist.png)
![main](/public/img/wireframes/favoritehotels.png)
![main](/public/img/wireframes/hosthotelsprofile.png)
![main](/public/img/wireframes/hosthotelprofile.png)

## Technologies and APIs

#### Technologies

* Front-end: React
* Backend: Mongoose, MongoDB, Express, NodeJS, bcryptjs, jsonwebtoken

#### APIs
* https://thedogapi.com/ (10k requests/month)
* https://dog.ceo/api/breeds/list/all

## Stretch Goals

* Users can leave reviews
* A user can create a profile as a “hotel/airbnb”
* Include an API for actual pet hotels 
* Skeleton
* Search by location

## Resources
All images were provided by Unsplash.

1. Materials-ui | https://material-ui.com/
2. NavLink | https://reactrouter.com/web/api/NavLink

Created by the Power Team.