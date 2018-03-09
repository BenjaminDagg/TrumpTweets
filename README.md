# Trump Tweets

This app uses Getty Images API and Twitter API to retrieve a random recent tweet from Donald Trump and display it over a random picture of Donald Trump retrieved from Getty Images. I use a NodeJS server as a proxy for my client to call and make a Twitter API call on its behalf to get around CORS issues.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Theme
The theme I chose for my APIs is Donald Trump and his notoriously 
stupid tweets. The APIs reflect my theme by providing a random image of
Donald Trump with the Getty Images API and by pulling a randomm tweet 
from Donald Trumps Twitter (warning not every tweet is a stupid Donald
Trump tweet but most of them probably are).

## Purpose

This project was to familiarize myself with web API calls in JavaScript, learn how to make a basic NodeJs server, and to learn the basic syntax and structure of Angular 2.

## Software Engineering Principles
I structured my project using the Model View Controller architecture. The model in this case is the individual components that each part of the app fit into like the tweets, images, and buttons components. The component modules also act as the controller since they have logic about how to handle button clicks etc. The view would be the individual html files for each component and the Typescript that displays them.

## Possible Improvents
I could clean up the structure of the code by putting API request into its own service then injecting the service into each component that needs it. Currently the controllers make the API calls themselves which adds overhead and makes the code messy.

I can also make the buttons part of the tweet and images components instead of having a seperate button component which was stupid in hindsight.

## Known Bugs

No known bugs. If a tweet is deleted by the tweet poster then the 'view tweet' button may fail but this is unlikely.

## Heroku

[Heroku deployment link](https://rocky-forest-69538.herokuapp.com/)

## Eclipse Generated README
### Compile insructions

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Creating Components

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


