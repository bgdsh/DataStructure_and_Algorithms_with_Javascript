import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {User} from "./user";
import {Config} from "../../Config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(private _http: Http) {}

  register(user: User):Promise<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this._http.post(
      Config.apiUrl + "Users",
      JSON.stringify({
        Username: user.email,
        Email: user.email,
        Password: user.password
      }),
      { headers: headers }
    ).toPromise().then(response => response.json().data)
    .catch(this.handleErrors);
  }
  login(user:User){
    alert("about to login");
  }
  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
