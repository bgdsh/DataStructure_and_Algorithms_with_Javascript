import { Component } from "@angular/core";
import { LogService } from "~/modules/core/services";
import { PlayerService } from "~/modules/player/services";

@Component({
  moduleId: module.id,
  selector: "player-controls",
  templateUrl: "player-controls.component.html",
})
export class PlayerControlsComponent {
  public currentTime: number = 0;
  public duration: number = 0;
  public playStatus: string = "Play";

  constructor(
    private logService: LogService,
    private playerService: PlayerService,
  ) {

  }

  public togglePlay() {
    const playing = !this.playerService.playing;
    this.playerService.playing = playing;
    this.playStatus = playing ? "Stop" : "Play";
  }
}
