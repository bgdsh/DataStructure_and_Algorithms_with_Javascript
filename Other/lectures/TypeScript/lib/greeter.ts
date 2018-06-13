// Require the core node modules.
import util = require("util");

// Require the application modules.
import {AppError} from "./app-error";

export class Greeter {

  private greetingTemplate : string;

  // I initialize the greeter.
  constructor(greetingTemplate : string) {
    this.setGreetingTemplate(greetingTemplate);
  }

  // --- PUBLIC METHODS. --- I generate a greeting for the given name.
  public greet(name : string) : string {
    return(util.format(this.greetingTemplate, this.normalizeName(name)));
  }

  // I update the greeting template used to generate greetings.
  public setGreetingTemplate(greetingTemplate : string) : void {
    this.testGreetingTemplate(greetingTemplate);
    this.greetingTemplate = greetingTemplate;
  }

  private normalizeName(name : string) : string {
    var normalized = name.toLowerCase()
    // Replace the leading-word-boundary letters with upper-case versions.
      .replace(/\b[a-z]/g, ($0 : string) : string => {
      return ($0.toUpperCase());
    });
    return (normalized);
  }

  private testGreetingTemplate(greetingTemplate : string) : void {

    if(!greetingTemplate) {
      throw(new AppError({message: "Greeting template cannot be empty."}));
    }

    if (!greetingTemplate.includes("%s")) {
      throw(new AppError({
        message: "Greeting template must contain one [%s] placeholder.",
        extendedInfo: {
          template: greetingTemplate
        }
      }));
    }
  }
}