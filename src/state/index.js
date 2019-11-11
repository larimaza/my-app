import {createStore} from 'redux';
import initialState from './state';
import reducer from './reducer';

export default createStore(reducer, initialState);
