import ITrajectoryPlusOptions from './interface/ITrajectoryPlusOptions';
import EventEmitter from './mod';
export default class TrajectoryPlus extends EventEmitter {
    private view;
    private mapRoamplayinternal;
    private routelayerid;
    private mobilelayerid;
    constructor(view: any);
    play(playbackoption?: ITrajectoryPlusOptions): void;
    remove(): void;
    private getHeading;
    private createAnimateRoute;
    private init;
}
