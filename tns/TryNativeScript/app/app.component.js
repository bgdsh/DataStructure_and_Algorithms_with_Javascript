"use strict";
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var user_service_1 = require("./shared/user/user.service");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this.counter = 16;
        this.email = "bgd@akka.co";
        this.isLoggingIn = true;
        this.user = new user_1.User();
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return "还能点击" + this.counter + "次";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.register();
        }
    };
    AppComponent.prototype.login = function () {
        this._userService.login(this.user);
    };
    AppComponent.prototype.register = function () {
        var _this = this;
        console.log("准备注册！");
        this._userService.register(this.user)
            .then(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS],
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map