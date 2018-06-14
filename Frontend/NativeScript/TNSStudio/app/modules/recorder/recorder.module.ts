import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { PROVIDERS } from "~/modules/recorder/services";

@NgModule({
  imports: [NativeScriptModule],
  providers: [...PROVIDERS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RecorderModule {}
