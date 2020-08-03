import ITrajectoryPlusOptions from './interface/ITrajectoryPlusOptions';
import EventEmitter from './mod';
export default class TrajectoryPlus extends EventEmitter {
    displayedLayerid: any;
    private view;
    private mapRoamplayinternal;
    private mobilelayerid;
    constructor(view: any);
    play(playbackoption?: ITrajectoryPlusOptions): void;
    remove(): void;
    private getHeading;
    private createAnimateRoute;
    private init;
}
