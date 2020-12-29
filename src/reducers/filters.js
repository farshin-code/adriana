const adrianaFilterDefaultState={}

export default (state=adrianaFilterDefaultState,action)=>{

    switch (action.type)
    {
        case 'SET_NAME_FILTER':
            return {...state,text:action.text}
        default :
        return state
    }
}