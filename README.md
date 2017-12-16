# CronGenerator
Generate UNIX based Cron Expression 

CronGenerator Project gives you a GUI for generating UNIX based CRON Expression. This Project is build in Angular 2 using [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

# Installation

You can install it using `npm` using command: `npm install cron-generator`. 

# Features

Currently `(v1.0.0)` it supports following schedules: 
Markup : 1. Every Seconds
         2. Every Minutes
         3. Every Hours
         4. Weekly
         5. Daily
         6. Monthly

In next `(v1.0.1)` release we will include following features also:
Markup : - [ ] Multiple selection of Days and Dates.

# How to use
After installation use the `app-cron-gen` selector. This component takes gives you output in format of `EventEmitter`. 

Syntax: `<app-cron-gen (cron)="some_function_name($event)" ></app-cron-gen>`

`some_function_name` has a defination in your component class as: `

    some_function_name(event) {
        // here this event object has the cron expression.
    }