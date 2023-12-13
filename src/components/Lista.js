import React from 'react'
import ListItem from './ListItem'
function Done(props){
    if(props.done){
        return(
            <img alt='done' src='./assets/accept.png'></img>
        )
    }else{
        return(
            <img alt='undone' src='./assets/done.png'></img>
        )
    }
}

function Lista(props){
    return(
        <ul>
        {props.items.map(item => <ListItem item={item} onDone={props.onDone} onItemDelete={props.onItemDelete}></ListItem>)}
        </ul>
    )
}

export default Lista