/**
 * Created by bgd on 16/3/21.
 */
import validation=require("./Validation");

var numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements validation.StringValidatior {
    isAcceptable(s:string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
