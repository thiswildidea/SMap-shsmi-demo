import { load } from './modules';
import { getAPIScript, isLoaded, loadAPIScript, setSMIMapOptions } from './script';
import { loadSMIMapCss } from './utils/css';
import utils from './utils/index';
export { getAPIScript, isLoaded, load, loadAPIScript, loadSMIMapCss, setSMIMapOptions, utils };
export default {
    getAPIScript: getAPIScript,
    isLoaded: isLoaded,
    load: load,
    loadAPIScript: loadAPIScript,
    loadSMIMapCss: loadSMIMapCss,
    setSMIMapOptions: setSMIMapOptions,
    utils: utils
};
