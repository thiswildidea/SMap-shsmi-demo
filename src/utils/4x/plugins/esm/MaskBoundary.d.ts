import IMaskOptions from './interface/IMaskOptions';
import EventEmitter from './mod';
export default class MaskBoundary extends EventEmitter {
    displayedLayerid: any;
    private view;
    constructor(view: any);
    add(maskOptions: IMaskOptions): void;
    remove(): void;
    show(): void;
    hide(): void;
    private init;
}
