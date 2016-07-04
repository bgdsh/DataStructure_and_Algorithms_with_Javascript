import {Component} from "@angular/core";
import {User} from "./shared/user/user";
import {UserService} from "./shared/user/user.service";
import {HTTP_PROVIDERS} from "@angular/http";
@Component({
    selector: "my-app",
    providers:[UserService,HTTP_PROVIDERS],
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;
    public user:User;
    public constructor(private _userService:UserService){
      this.user=new User();
    }
    public email:String="bgd@akka.co";
    public isLoggingIn=true;
    public get message(): string {
        if (this.counter > 0) {
            return "还能点击" + this.counter + "次";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    public submit(){
      if(this.isLoggingIn){
        this.login();
      }else{
        this.register();
      }
    }
    login(){
      this._userService.login(this.user);
    }
    register(){
      console.log("准备注册！");
      this._userService.register(this.user)
      .then(() => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },() => alert("Unfortunately we were unable to create your account.")
      );
    }
    public onTap() {
        this.counter--;
    }
    public toggleDisplay(){
      this.isLoggingIn=!this.isLoggingIn;
    }
}
