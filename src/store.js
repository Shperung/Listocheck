import {createStore} from 'redux';

import reducer from './reducer/default-reducer.js';

const store = createStore(reducer);

// for visual console store    store.getState()
window.store = store;

export default store;