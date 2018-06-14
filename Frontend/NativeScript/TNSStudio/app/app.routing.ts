import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule} from "nativescript-angular/router";
import { PlayerPageComponent } from "~/modules/player/components/player-page/player-page.component";

const routes: Routes = [
  { path: "", component: PlayerPageComponent},
];

@NgModule({
  exports: [NativeScriptRouterModule],
  imports: [NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
