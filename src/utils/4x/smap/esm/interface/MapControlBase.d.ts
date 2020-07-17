import IMapControlOptions from './IMapControlOptions';
export default class MapControlBase {
    controlName: string;
    visible: boolean;
    position: string;
    collapse: boolean;
    layerid: string;
    constructor(mapoptons: IMapControlOptions);
}
