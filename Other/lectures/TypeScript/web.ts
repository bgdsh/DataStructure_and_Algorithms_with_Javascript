// Require the core node modules.
import {Application} from "express";
import bodyParser = require("body-parser");
import chalk = require("chalk");
import express = require("express");
import {NextFunction, Request, Response} from "express";

// Require the application modules.
import {AppError} from "./lib/app-error";
import {ErrorLogger} from "./lib/error-logger";
import {Greeter} from "./lib/greeter";

// Initialize our application models.
var errorLogger = new ErrorLogger();
var greeter = new Greeter("Hello %s, I hope you are well!");

// Initialize the Express application.
var app : Application = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ROUTE: I return a greeting for the provided user.
app.get("/greet/:name", function (request : Request, response : Response, next : NextFunction) : void {
  response
    .type("text/plain")
    .send(greeter.greet(request.params.name));
});

// ROUTE: I update the greeting template being used by the greeter.
app.post("/greeting", function (request : Request, response : Response, next : NextFunction) : void {
  greeter.setGreetingTemplate(request.body.template);
  response
    .type("text/plain")
    .send(greeter.greet("{NAME GOES HERE}"));
});

app.use(function(request: Request, response: Response, next: NextFunction) {
  next(Error('Page not found.'))
})

app.use(function (error : Error, request : Request, response : Response, next : NextFunction) : void {
  errorLogger.log(error)
  response.send(error.message);  
})

// Start listening on the public port.
app.listen(3000, function () : void {
  console.log(chalk.default.bold.green("Application listening on port :3000."));
});

process.on("uncaughtException", function handleError(error : any) : void {
  errorLogger.log(error);
});