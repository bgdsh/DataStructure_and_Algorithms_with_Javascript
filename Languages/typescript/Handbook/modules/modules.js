/**
 * Created by bgd on 16/3/21.
 */
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length == 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    })();
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
var strings = ["Hello", "98052", "101"];
var validators = {};
validators["Zip Code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
});
//# sourceMappingURL=modules.js.map