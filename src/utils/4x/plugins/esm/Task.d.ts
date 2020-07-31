import IQueryOptions from './interface/IQueryOptions';
import EventEmitter from './mod';
export default class Task extends EventEmitter {
    private view;
    private boundarylayerid;
    constructor(view: any);
    query<T extends any = any>(boundaryOptions?: IQueryOptions): Promise<T>;
    remove(): void;
    private init;
}
