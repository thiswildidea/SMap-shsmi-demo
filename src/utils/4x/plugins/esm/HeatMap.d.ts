import IHeatmapOptions from './interface/IHeatmapOptions';
import EventEmitter from './mod';
export default class HeatMap extends EventEmitter {
    displayedLayerid: any;
    private view;
    private heatmaplayer;
    constructor(view: any);
    add(heatmapOptions: IHeatmapOptions): void;
    remove(heatmapid: string): void;
    refreshdata(datas: any): void;
    show(): void;
    hide(): void;
    private init;
}
