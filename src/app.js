import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {addProfile,addFollower,setCurrentProfile} from './actions/profiles'

const store=configureStore()

//checking data:
store.dispatch(addProfile('farshin','asri','c:'))
store.dispatch(addProfile('reza','amiri','d:/'))
store.dispatch(addProfile('hosein','javadi','d:/'))
store.dispatch(addProfile('farshid','alipro','d:/'))

store.dispatch(setCurrentProfile(store.getState().profiles[0].id))
console.log(store.getState())
const idOfUsers=store.getState().profiles.filter(p=> p.id != store.getState().profiles[0].id )
 
idOfUsers.map(({id})=>{

    store.dispatch(addFollower(id,store.getState().appConfig.currentId))

})
//console.log(store.getState().appConfig.currentId)
////

store.subscribe(()=>{
    console.log(store.getState())
})

const jsx=(
    <Provider store={store}>
    <AppRouter />
    </Provider>

)
ReactDOM.render(jsx,document.getElementById('app'))