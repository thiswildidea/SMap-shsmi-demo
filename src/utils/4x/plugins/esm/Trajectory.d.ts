import ITrajectoryOptions from './interface/ITrajectoryOptions';
import EventEmitter from './mod';
export default class Trajectory extends EventEmitter {
    private map;
    private routepalybackinternal;
    private track;
    constructor(map: any);
    playback(playbackoption?: ITrajectoryOptions): void;
    hideHistoryRoute(): void;
    private getHeading;
    private createAnimateRoute;
    private init;
}
