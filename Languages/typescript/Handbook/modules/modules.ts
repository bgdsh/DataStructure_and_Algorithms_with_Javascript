/**
 * Created by bgd on 16/3/21.
 */
module Validation {
    export interface StringValidator {
        isAcceptable(s:string):boolean;
    }
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s:string):boolean {
            return lettersRegexp.test(s);
        }
    }
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s:string):boolean {
            return s.length == 5 && numberRegexp.test(s);
        }

    }
}

var strings = ["Hello", "98052", "101"];
var validators:{[s:string]:Validation.StringValidator;} = {};
validators["Zip Code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
strings.forEach(s=> {
    for (var name in validators) {
        console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
});
