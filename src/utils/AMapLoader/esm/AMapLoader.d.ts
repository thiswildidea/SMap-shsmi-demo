import { load } from './modules';
import { getAPIScript, isLoaded, loadAPIScript, setSMIMapOptions } from './script';
import { loadSMIMapCss } from './utils/css';
import utils from './utils/index';
export { getAPIScript, isLoaded, load, loadAPIScript, loadSMIMapCss, setSMIMapOptions, utils };
export { ILoadAPIScriptOptions } from './script';
declare const _default: {
    getAPIScript: typeof getAPIScript;
    isLoaded: typeof isLoaded;
    load: typeof load;
    loadAPIScript: typeof loadAPIScript;
    loadSMIMapCss: typeof loadSMIMapCss;
    setSMIMapOptions: typeof setSMIMapOptions;
    utils: {
        Promise: PromiseConstructor;
    };
};
export default _default;
