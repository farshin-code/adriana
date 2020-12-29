import { TestScheduler } from 'jest'
import { isMoment } from 'moment'
import {addProfile,addFollower,setCurrentProfile} from '../../actions/profiles'

test('test for addProfile',()=>{
  
    const profileData=addProfile('ali','rezaee','c:')
    expect(profileData).toEqual({
        
        type:"ADD_PROFILE",
        profile:{
        id:expect.any(String),  
        nameOf:'ali',
        family:'rezaee',
        avatar:'c:',
        followers:[],
        following:[],
        timeStamp:expect.any(Object)
        }
        
        
    })
})
test('test for addFollower',()=>{

    const matchedData=addFollower("123qwe","321ewq")

    expect(matchedData).toEqual({
        
        type:'ADD_FOLLOWER',
        idOfFollower:"123qwe",
        idOfFollowee:"321ewq"
        
    })
})

test('test for setCurrentProfile',()=>{

    const matchedData=setCurrentProfile('123123qwe')
    expect(matchedData).toEqual({
        type:"SET_CURRENT",
        currentId:"123123qwe"
    })
})