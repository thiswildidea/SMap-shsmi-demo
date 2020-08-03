import Boundary from './Boundary';
import HeatMap from './HeatMap';
import Layers from './interface/Layers';
import MaskBoundary from './MaskBoundary';
import MigrationMap from './MigrationMap';
import { load } from './modules';
import Trajectory from './Trajectory';
import TrajectoryPlus from './TrajectoryPlus';
export default {
    load: load,
    Layers: Layers,
    Boundary: Boundary,
    HeatMap: HeatMap,
    MaskBoundary: MaskBoundary,
    TrajectoryPlus: TrajectoryPlus,
    MigrationMap: MigrationMap,
    Trajectory: Trajectory
};
