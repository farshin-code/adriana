import React from 'react'
import {connect} from 'react-redux'
const MyProfile= (props)=>(

    <div>
    <h3>My Profile:</h3>
    <h4>{props.me.nameOf} {props.me.family} - id:{props.me.id}  </h4>

    </div>

)

const MapStateToProps=((state)=>({

me:state.profiles.find(profile => profile.id === state.appConfig.currentId)

})
    
)

export default connect(MapStateToProps)(MyProfile)