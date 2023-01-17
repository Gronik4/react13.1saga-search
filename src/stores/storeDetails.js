import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import createSagaMiddleware from 'redux-saga';
import skillsDetail from '../redusers/skillsDetail';
import sagaDetails from '../sagas/details';

const reduser = combineReducers({
  detailing: skillsDetail,//Имя state придумываем здесь!!
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMidleware = createSagaMiddleware();

const storeDetails = createStore(reduser, composeEnhancers(applyMiddleware(sagaMidleware)));

sagaMidleware.run(sagaDetails);

export default storeDetails;
