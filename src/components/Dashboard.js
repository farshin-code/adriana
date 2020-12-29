import React from 'react'
import MyProfile from './MyProfile'
import FollowersList from './FollowersList'
import {Link} from 'react-router-dom'



export default ()=>(

  <div>
    <h2>Dashboard</h2>
    <MyProfile />
    <FollowersList />
    <Link to="/stories">Stories</Link>
    <Link to="/search">Search People</Link>
    <Link to="/messages">Messages</Link>    
  </div>  

)


