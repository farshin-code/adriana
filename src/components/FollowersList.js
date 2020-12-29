import React from 'react'
import {connect} from 'react-redux'
import FollowersListItem from './FollowersListItem'

const Followers =(props)=>(


    <div>

        <p>List of Followers:</p>
        { 
             props.followers.map(follower => 
            <FollowersListItem  
            key={follower.id} 
            follower={follower}
            />) 
        }

    </div>
)


// var idOfFollowers=[]
//     idOfFollowers=state.profiles.find(profile => profile.id === state.appConfig[0])
//     console.log(idOfFollowers)
const MapStateToProps=((state)=>{ 
    
    var idOfFollowers=[]
    idOfFollowers=(state.profiles.find(profile => profile.id === state.appConfig.currentId)).followers

    

    return (
        {
            followers:state.profiles.filter(profile => idOfFollowers.includes(profile.id))
        }
    )    

       
})

export default connect(MapStateToProps)(Followers)
