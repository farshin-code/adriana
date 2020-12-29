import React from 'react'
import {connect} from 'react-redux'
import {setNameFilter} from '../actions/filters'
import SearchItem from './SearchItem'
import {addFollower} from '../actions/profiles'
const Search=(props)=>{

    return (

        <div>
            <input 
            type='text'
            placeholder='Search for people'
            value={props.filters.text || ''}
            onChange={((e)=>{
                
                props.dispatch(setNameFilter(e.target.value))
            })}
            />
            {props.profiles.map((profile)=>{
                
                const buttonText=props.currentFollowers.includes(profile.id) ? 'already added':'add '
                
                return <SearchItem 
                key={profile.id} 
                profile={profile} 
                buttonText={buttonText} 
                onclick={()=>{
                    props.dispatch(addFollower(profile.id,props.currentId))
                    props.history.push("/")
                }}
                /> 
                

            })}
        </div>
    )
    
}

const MapStateToProps=(state)=>({

    filters:state.filters,
    profiles:state.profiles.filter(profile => profile.nameOf.includes(state.filters.text) ),
    currentId:state.appConfig.currentId,
    currentFollowers:(state.profiles.find(profile => profile.id === state.appConfig.currentId)).followers

})
export default connect(MapStateToProps)(Search);