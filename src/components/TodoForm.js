import React, { useState } from 'react';

function TodoForm(props){
    
    const [texto, setTexto] = useState("");

    function pegarValor(event) {
        let text = event.target.value;
        setTexto(text);
    }

    function addItem(event) {
        event.preventDefault();
        if(texto){
            props.onAddItem(texto)
            setTexto("");
        }
    }
    return(
    <form>
        <input type='text' onChange={pegarValor} value={texto}></input>
        <button className={"insert"} onClick={addItem}>Enviar</button>
    </form>
    )
}


export default TodoForm