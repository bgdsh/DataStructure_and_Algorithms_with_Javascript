var zip = require("./ZipCodeValidation");
var letters = require("./LettersOnlyValidation");
var strings = ['Hello', '98052', '101'];
var validators = {};
validators["ZIP code"] = new zip.ZipCodeValidator();
validators["Letters only"] = new letters.LettersOnlyValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
});
//# sourceMappingURL=Test.js.map