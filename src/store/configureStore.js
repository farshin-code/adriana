import profilesReducer from '../reducers/profiles'
import appConfigReducer from '../reducers/appConfig'
import filterReducer from '../reducers/filters'
import {combineReducers,createStore} from 'redux'

export default ()=>{

const store=createStore(
        combineReducers({
            profiles:profilesReducer,
            appConfig:appConfigReducer,
            filters:filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
return store

}
