import ITrajectoryOptions from './interface/ITrajectoryOptions';
import EventEmitter from './mod';
export default class Trajectory extends EventEmitter {
    private view;
    private routepalybackinternal;
    private routelayerid;
    private track;
    constructor(view: any);
    play(playbackoption?: ITrajectoryOptions): void;
    remove(): void;
    private getHeading;
    private createAnimateRoute;
    private init;
}
