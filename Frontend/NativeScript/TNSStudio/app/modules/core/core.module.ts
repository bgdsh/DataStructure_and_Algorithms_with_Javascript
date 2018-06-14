import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { PIPES } from "~/modules/core/pipes";
import { PROVIDERS } from "~/modules/core/services";

@NgModule({
  declarations: [...PIPES],
  exports: [
    NativeScriptModule,
    ...PIPES,
  ],
  imports: [
    NativeScriptModule,
  ],
  providers: [...PROVIDERS],
})
export class CoreModule {}
