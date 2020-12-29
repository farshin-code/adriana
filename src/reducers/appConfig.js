const adrianaConfigDefaultState={}

export default (state=adrianaConfigDefaultState,action)=>{

    switch (action.type){

        case 'SET_CURRENT':
           return {...state,currentId:action.currentId}
        default :
        return state

    }
}

