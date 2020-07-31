import IBoundaryOptions from './interface/IBoundaryOptions';
import EventEmitter from './mod';
export default class Boundary extends EventEmitter {
    private view;
    private boundarylayerid;
    constructor(view: any);
    add(boundaryOptions?: IBoundaryOptions): void;
    remove(): void;
    show(): void;
    hide(): void;
    private init;
}
