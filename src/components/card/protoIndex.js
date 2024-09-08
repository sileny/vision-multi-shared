import prototype from './prototype';
import prototypeView from './prototypeView';
import { libraryName } from './const';

const bundle = {
  prototype,
  prototypeView,
};

export default bundle;

if (process.env.NODE_ENV === 'development') {
  bundle.isDev = true;
  window[libraryName] = bundle;
}
