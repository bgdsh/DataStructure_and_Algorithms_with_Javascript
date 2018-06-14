import { Injectable } from "@angular/core";
import { ITrack } from "~/modules/core/models/track.model";

@Injectable()
export class PlayerService {

  public playing: boolean;
  public tracks: ITrack[];

  constructor() {
    this.tracks = [{name: "Guitar"}, {name: "Vocals"}];
  }

  public play(index: number): void {
    this.playing = true;
  }

  public pause(index: number): void {
    this.playing = false;
  }

  public addTrack(track: ITrack): void {
    const index = this.getTrackIndex(track);
    if (index > -1) {
      this.tracks.push(track);
    }
  }

  public removeTrack(track: ITrack) {
    const index = this.getTrackIndex(track);
    if (index > -1) {
      this.tracks.splice(index, 1);
    }
  }

  public recorderTrack(track: ITrack, newIndex: number) {
    const index = this.getTrackIndex(track);
    if (index > 1) {
      this.tracks.splice(newIndex, 0, this.tracks.splice(index, 1)[0]);
    }
  }

  public getTrackIndex(track: ITrack): number {
    let index = -1;
    for (let i = 0; i < this.tracks.length; i++) {
      if (this.tracks[i].filepath === track.filepath) {
        index = i;
        break;
      }
    }
    return index;
  }

}
