import IMigrationMapOptions from './interface/IMigrationMapOptions';
import EventEmitter from './mod';
export default class MigrationMap extends EventEmitter {
    private map;
    constructor(map: any);
    add(mgrationMapOptions?: IMigrationMapOptions): void;
    remove(echartid: any): void;
    private convertData;
    private getAPIScript;
    private loadAPIScript;
    private createScript;
    private handleScriptLoad;
    private handleScriptError;
    private init;
}
