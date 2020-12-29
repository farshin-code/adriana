import profiles from '../../reducers/profiles'
import moment from 'moment'
test('test for addProfile',()=>{

    const newProfile={
        id:"123123",
        nameOf:"ali",
        family:"rezaee",
        avatar:"c:",
        followers:[],
        following:[],
        timeStamp:moment(0)
    }

    const result=profiles(undefined,{type:'ADD_PROFILE',profile:newProfile})


    expect(result).toEqual([newProfile])
})


