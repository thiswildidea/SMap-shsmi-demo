import IMapOptions from './interface/IMapOptions';
export declare function init3Dmap(containerv: string, mapconfig: any, maplayers: any, mapwidgets: any, mapProxys: any, mapextent: any, maptoken: string, mapoptions: IMapOptions): Promise<{
    sceneView: any;
    mapv: any;
}>;
export declare function init2Dmap(containerv: string, mapconfig: any, maplayers: any, mapwidgets: any, mapProxys: any, mapextent: any, maptoken: string, mapoptions: IMapOptions): Promise<{
    mapView: any;
    mapv: any;
}>;
