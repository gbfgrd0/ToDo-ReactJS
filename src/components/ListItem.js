import React from 'react'

function DoneImg(props){
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

function ListItem(props){
    return( 
        <li className={props.item.done?"done item":"item"} key={props.item.id}>{props.item.texto}
        <div>
        <button className={"botão"} onClick={()=>props.onDone(props.item)}><DoneImg done={props.item.done}></DoneImg></button>
        <button className={"botão"}><img onClick={()=>props.onItemDelete(props.item)} alt='delete' src="./assets/bin.png"></img></button>
        </div>
        </li>)
}

export default ListItem