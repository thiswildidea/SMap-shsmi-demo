import IFlashPointOptions from './interface/IFlashPointOptions';
import EventEmitter from './mod';
export default class FlashPoint3DLayer extends EventEmitter {
    private view;
    private falshpoint3DRenderer;
    constructor(view: any);
    add(flashPointOptions: IFlashPointOptions): void;
    remove(): void;
    private init;
}
