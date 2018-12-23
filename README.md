## Context

Mini application realised for a technical test.
<br />Requirements :
NodeJS (Express or Koa) for the backend.
Use any templating engine your are comfortable with (Mustache, DustJS, Jade, …)
Use any front end framework your are comfortable with (Angular, React, VueJs, ...)

Plus:
Websocket (socket.io) / AJAX
SASS
Module Bundler (Gulp, Grunt, Webpack, or other)

## Tools, frameworks and technologies used
The main framework chosen is Angular 7, with Bootstrap.
I tried to use pug but the compilation keep failing, as the use of scss.
I used Bower as module bundler.
For the backend, I used nodeJS and socket.io.

## Setup

Before starting, please make sure you have the last version of nodeJS (https://nodejs.org/en/download/package-manager/), npm (https://www.npmjs.com/get-npm) and Angular CLI (https://angular.io/guide/quickstart) installed.
You might need to install g++ for compiling need so `npm install` request doesn't fail.
Then,start the server part first with the commandline `node server.js`.
Finally you can start the angular app with the commandline `ng-serve --open`.

I hope you will enjoy your visit !


N.B.: please make sure your 4400 port isn't already in use, as I already used it in this app.
