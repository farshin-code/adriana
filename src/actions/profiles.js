import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'

const setCurrentProfile=(id)=>({

  type:'SET_CURRENT',
  currentId:id
})

const addProfile=(nameOf,family,avatar)=>({

  type:'ADD_PROFILE',
  profile:{
      id:uuidv4(),
      nameOf,
      family,
      avatar,
      followers:[],
      following:[],
      timeStamp:moment()
  }  

})

const addFollower=(idOfFollower,idOfFollowee)=>({

    type:'ADD_FOLLOWER',
    idOfFollower,
    idOfFollowee

})

export {addProfile,addFollower,setCurrentProfile}
