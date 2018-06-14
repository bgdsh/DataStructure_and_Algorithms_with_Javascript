import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DatabaseService } from "~/modules/core/services/database.service";
import { DialogService } from "~/modules/core/services/dialog.service";
import { LogService } from "~/modules/core/services/log.service";

@Injectable()
export class AuthService {
  public static CURRENT_USER: any;
  public authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private databaseService: DatabaseService,
    private dialogService: DialogService,
    private logService: LogService,
  ) {
    this._init();
  }

  public promptLogin(msg: string, username: string = ""): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dialogService
      .login(msg, username, "")
      .then((input) => {
        if (input.result) {
          if (input.userName && input.userName.indexOf("@") > -1) {
            if (input.password) {
              this._saveUser(input.userName, input.password);
              resolve();
            } else {
              this.dialogService.alert("You must provide a password")
              .then(reject.bind(this, input.userName));
            }
          } else {
            this.dialogService
            .alert("You must provide a valid email address")
            .then(reject.bind(this, input.userName));
          }
        }
      });
    });
  }

  private _saveUser(username: string, password: string) {
    AuthService.CURRENT_USER = {username, password};
    this.databaseService.setItem(DatabaseService.KEYS.currentUser, AuthService.CURRENT_USER);
    this._notifyState(true);
  }

  private _init() {
    AuthService.CURRENT_USER = this.databaseService.getItem(DatabaseService.KEYS.currentUser);
    this.logService.debug(`Current user:`, AuthService.CURRENT_USER);
    this._notifyState(!!AuthService.CURRENT_USER);
  }

  private _notifyState(auth: boolean) {
    this.authenticated$.next(auth);
  }
}
