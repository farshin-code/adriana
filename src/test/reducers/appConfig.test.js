import { TestScheduler } from 'jest'
import appConfig from '../../reducers/appConfig'

test('should be farshin',()=>{

const currentId=appConfig(undefined,{type:"SET_CURRENT",currentId:"123123"})

expect(currentId).toEqual({currentId:"123123"})
})