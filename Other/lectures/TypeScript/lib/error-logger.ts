// Require the core node modules.
import chalk = require("chalk");
import util = require("util");

// I pretty-print errors to the console / terminal.
export class ErrorLogger {
  public log(error : any) : void {
    console.log(chalk.default.red.bold("An Error Occurred"));
    console.log(chalk.default.red.bold("================="));
    this.printError(error);
  }

  private printError(error : any, depth : number = 0) : void {
    var prefix = depth
      ? ("-".repeat((depth * 4) + (2 * (depth - 1))) + "|")
      : "";
  
    if (!error || !error.message) {
      this.printLines(prefix, this.serialize(error), chalk.default.black);
      return;
    }

    this.printLines(prefix, error.message, chalk.default.red);

    if (error.extendedInfo) {
      this.printLines(prefix, this.serialize(error.extendedInfo), chalk.default.black);
    }

    if (error.stack) {
      this.printLines(prefix, error.stack, chalk.default.dim);
    }

    if (error.rootCause && (depth < 5)) {
      this.printError(error.rootCause, (depth + 1));
    }
  }

  private printLines(prefix : string, value : string, colorize : chalk.Chalk) : void {
    value
      .split(/[\r\n]+/g)
      .slice(0, 5) // Truncate the number of lines we output (for demo).
      .forEach((line : string) : void => {

        prefix
          ? console.log(chalk.default.dim(prefix), colorize(line))
          : console.log(colorize(line));
      });
  }

  private serialize(value : any) : string {
    try {
      return (JSON.stringify(value, null, 4));
    } catch (error) {
      return (util.inspect(value));
    }
  }
}