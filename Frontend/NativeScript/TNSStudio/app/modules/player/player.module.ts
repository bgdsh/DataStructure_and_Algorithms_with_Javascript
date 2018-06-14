import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CoreModule } from "~/modules/core/core.module";
import { COMPONENTS } from "~/modules/player/components";
import { PROVIDERS } from "~/modules/player/services";

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [NativeScriptModule, CoreModule],
  providers: [...PROVIDERS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PlayerModule {}
