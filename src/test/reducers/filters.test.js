import { TestScheduler } from 'jest'
import filterReducer from '../../reducers/filters'

test('should be test default value ',()=>{
    const result=filterReducer(undefined,{type:'@@INIT'})
    expect(result).toEqual({})
})

test('should be a new value',()=>{
    const newValue=filterReducer(undefined,{type:"SET_NAME_FILTER",text:"far"})
    expect(newValue).toEqual({text:"far"})

})
