import { Injectable } from "@angular/core";

@Injectable()
export class LogService {
  public static ENABLE: boolean = true;
  public debug(msg: any, ...formatParams: any[]) {
    if (LogService.ENABLE) {
      // tslint:disable-next-line:no-console
      console.log(msg, formatParams);
    }
  }

  public error(msg: any, ...formatParams: any[]) {
    if (LogService.ENABLE) {
      // tslint:disable-next-line:no-console
      console.error(msg, formatParams);
    }
  }

  public inspect(obj: any) {
    if (LogService.ENABLE) {
      // tslint:disable-next-line:no-console
      console.log(obj);
      // tslint:disable-next-line:no-console
      console.log(typeof obj);
      if (obj) {
        // tslint:disable-next-line:no-console
        console.log("constructor: ", obj.constructor.name);
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            // tslint:disable-next-line:no-console
            console.log(`${key}: `, obj[key]);
          }
        }
      }
    }
  }
}
