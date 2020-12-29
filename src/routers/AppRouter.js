import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Messages from '../components/Messages'
import Dashboard from '../components/Dashboard'
import Stories from '../components/Stories'
import Search from '../components/Search'

const AppRouter =()=>(
    <BrowserRouter>
    
        <Switch>
        
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/messages" component={Messages} />
            <Route path="/stories" component={Stories} />
            <Route path="/search" component={Search} />            

        </Switch>
    
    </BrowserRouter>
)


export default AppRouter