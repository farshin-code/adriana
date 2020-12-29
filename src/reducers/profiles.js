
const adrianaDefaultState=[]

export default (state=adrianaDefaultState,action)=>{

    switch (action.type){

        case 'ADD_PROFILE':
          return [...state,action.profile]   
        
        case 'ADD_FOLLOWER':
            
          return state.map((profile) => {
        

             if (profile.id === action.idOfFollowee) {
               
              return {...profile,followers:[...profile.followers,action.idOfFollower]}
                      
                } else {
                  return profile;

                 };
          });
            
        default :
            return state
        

    }
}