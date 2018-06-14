import { AuthService } from "~/modules/core/services/auth.service";
import { DatabaseService } from "~/modules/core/services/database.service";
import { DialogService } from "~/modules/core/services/dialog.service";
import { LogService } from "~/modules/core/services/log.service";

export const PROVIDERS: any[] = [
  DatabaseService,
  DialogService,
  LogService,
  AuthService,
];

export * from "./database.service";
export * from "./log.service";
export * from "./auth.service";
export * from "./dialog.service";
