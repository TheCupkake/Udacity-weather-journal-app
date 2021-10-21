# Weather Journal App Project

## Table of Contents

* [Description](#Description)
* [Usage](#Usage)
* [Languages Used](#Languages-Used)
* [Development](#Development)
* [Dependencies](#Dependencies)


## Description

This is my implementation of the ***Udacity*** Weather Journal App project, it is built from the starting skeleton static page provided by the course, and built upon it to make it dynamic, it is responsive to various devices. It demonstrates the following features: 

- The interface is pretty simple without unneeded complications

- The app connect to the OpenWeatherMap API to get data about the weather on the current day for a specified location

- The app then presents that data to the user after storing it in a local object on the local server

## Usage

The usage of this project is for the user to type in the zip code of a state of his choice in the United states by default, the he types a message regarding how he is feeling today, and then once he hits the button "generate" the interface dynamically presents to him the following info:

- The date of the day

- The temprature at the time of asking

- the message that he has just typed

## Languages Used

- HTML

- CSS

- JavaScript

## Development 

I have mainly relied on the course material and the lessons provided by the instructors to complete this project, but I have also searched online for documentation for functions and methods that weren't mentioned in the course material but were necessary for certain functionalities, I have encountered many problems while doing this project, some had an easy solution while others I struggled for a long time with. For example, when I wrote the base url for the openweathermap api it didn't work at first, until I realized that I had to put in "http://" at first, I then continued to look up why I had to do so

## Dependencies

This project uses NodeJS to build the server and interactivity with the client side to the server side, and for it to work you need to install Node and then the follwing packages:

- Express
- body-parser
- Cors
