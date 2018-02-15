# Trump Twees

This app uses Getty Images API and Twitter API to retrieve a random recent tweet from Donald Trump and display it over a random picture of Donald Trump retrieved from Getty Images. I use a NodeJS server as a proxy for my client to call and make a Twitter API call on its behalf to get around CORS issues.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Purpose

This project was to familiarize myself with web API calls in JavaScript, learn how to make a basic NodeJs server, and to learn the basic syntax and structure of Angular 2.

## Known Bugs

App will not be able to retrieve Tweets from twitter API if you do not first start the NodeJS server by running 'node server.js' in the terminal. 

Twitter API call may fail to retrieve data and give an error stating 'javascript object has no member data'.



## Eclipse Generated README
### Compile insructions

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Creating Components

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


