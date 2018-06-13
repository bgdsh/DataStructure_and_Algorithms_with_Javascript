interface AppErrorOptions {
  message: string;
  rootCause?: any;
  extendedInfo?: ExtendedInfo;
}

interface ExtendedInfo {
  [key: string]: any;
}

// CAUTION: We can only extend the native Error object because of the VERSION OF NODE
// we are using (which supports ES6) - this is NOT a feature of TypeScript.
export class AppError extends Error {

  public extendedInfo?: ExtendedInfo;
  public rootCause: any;

  // I initialize the custom application error.
  constructor( options: AppErrorOptions ) {
      super( options.message );
      this.name = "AppError";
      this.rootCause = ( options.rootCause || null );
      this.extendedInfo = ( options.extendedInfo || undefined );
      Error.captureStackTrace( this, this.constructor );
  }
}
