/**
 * Created by bgd on 16/3/21.
 */
import validation=require("./Validation");

var lettersRegexp = /^[A-Za-z]+$/;
export class LettersOnlyValidator implements validation.StringValidatior {
    isAcceptable(s:string) {
        return lettersRegexp.test(s);
    }
}