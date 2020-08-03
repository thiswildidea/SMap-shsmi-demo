import ITrajectoryOptions from './interface/ITrajectoryOptions';
import EventEmitter from './mod';
export default class Trajectory extends EventEmitter {
    displayedLayerid: any;
    private view;
    private routepalybackinternal;
    private track;
    constructor(view: any);
    play(playbackoption?: ITrajectoryOptions): void;
    remove(): void;
    private getHeading;
    private createAnimateRoute;
    private init;
}
