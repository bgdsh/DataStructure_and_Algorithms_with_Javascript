/**
 * Created by bgd on 16/3/21.
 */
import validation=require("./Validation");
import zip=require("./ZipCodeValidation");
import letters=require("./LettersOnlyValidation");
var strings = ['Hello', '98052', '101'];
var validators:{[s:string]:validation.StringValidatior} = {};
validators["ZIP code"] = new zip.ZipCodeValidator();
validators["Letters only"] = new letters.LettersOnlyValidator();
strings.forEach(s=> {
    for (var name in validators) {
        console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
});