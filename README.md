# Where It Is Intro

This project is inspired by my wife since I always need to ask her "where's my stuff".

"Where It Is" provides a solution for people who struggle with finding things that they aren't using for daily life, e.g. charger, screwdriver, school glue...

When user wants to remember something, simply take a photo(s) or upload an existing picture(s) to  "Where It Is", our APP will recognize what the thing is and where to put it by using google's Vision API.

## Phrases
1. Angular 7 + nodeJS(ExpressJS) + mongoDB + Webview 
2. Transfer from Webview to React Native 

## User Case
1. log in
    a. sign up
2. list of memories if any
    a. using voice to text API to location your memory
    b. take photo or upload an existing picture if there havn't any

## System Design
Scenario
Necessary
Application 
Kilobit(data)
Evolve

## How to Make a Vision API request

https://cloud.google.com/vision/docs/request


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## how to upload to github 

https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

## how to delpoy to github pages

First install angular-cli-ghpages globally
    npm install -g angular-cli-ghpages
Angular CLI with the --base-href
    ng build --prod --base-href="https://<user-name>.github.io/<repo>/"
To publish the app
    ngh