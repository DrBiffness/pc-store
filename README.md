# PC Store - custom e-commerce site

![version](https://img.shields.io/badge/php-7.2.0-blue)![version](https://img.shields.io/badge/laravel-7.0-red)![version](https://img.shields.io/badge/reactjs-16.2.0-green)

PC Store is a custom built e-commerce web site inspired by <a href="https://www.microcenter.com">microcenter.com</a>. The project employs a Laravel back-end for REST APIs with a React.js front-end. MySQL is the database with Eloquent ORM managing the mappings. 

## Goals
The goal of this project is to make a full-fledged custom dev e-commerce web store for the purpose of honing full-stack web development skills. At this time, the goal is not to make this project an actual online store. 

## Current Status
This project is still under construction and will be receiving daily updates. 

## Project Structure
### `app` Directory
The `app` directory contains the controllers and models for the project. 
### `resources` Directory
The `resources` directory contains all React components in the `resources/js`.
### `routes` Directory
The `routes` directory contains all REST API endpoints in `api.php`. `web.php` contains the wildcard route to enable React Router to work properly. 
