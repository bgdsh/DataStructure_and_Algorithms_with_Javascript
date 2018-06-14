export interface ITrack {
  filepath?: string;
  name?: string;
  order?: number;
  volume?: number;
  solo?: boolean;
}

export class TrackModel implements ITrack {
  public filepath: string;
  public name: string;
  public order: number;
  public volume: number;
  public solo: boolean;

  constructor(model?: any) {
    if (model) {
      for (const key in model) {
        if (model.hasOwnProperty(key)) {
          this[key] = model[key];
        }
      }
    }
  }
}
