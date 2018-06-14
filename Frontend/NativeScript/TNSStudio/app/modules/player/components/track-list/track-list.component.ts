import { Component } from "@angular/core";
import { ITrack } from "~/modules/core/models/track.model";
import { AuthService, DialogService, LogService } from "~/modules/core/services";
import { PlayerService } from "~/modules/player/services";

@Component({
  moduleId: module.id,
  selector: "track-list",
  templateUrl: "track-list.component.html",
})
export class TrackListComponent {
  constructor(
    private authService: AuthService,
    private logService: LogService,
    private dialogService: DialogService,
    public playerService: PlayerService,
  ) {
  }

  public record(track: ITrack) {
    this.logService.inspect(track);
  }
}
