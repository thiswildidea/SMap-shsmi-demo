import ILayerOptions from '../interface/ILayerOptions';
export declare function init3DBaseMaplayers(layers: any[], maptoken: any): Promise<any>;
export declare function init2DBaseMaplayers(layers: any[], maptoken: any): Promise<any>;
export declare function initiallayers(addlayer: any, layers: any[], maptoken: any, viewMode: any): Promise<void>;
export declare function addLayer(layerOptions: ILayerOptions, view: any, maptoken: string): Promise<any>;
