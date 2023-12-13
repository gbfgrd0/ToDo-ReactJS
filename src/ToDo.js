import React, { useEffect, useState } from 'react';
import './ToDo.css';
import Lista from './components/Lista'
import TodoForm from './components/TodoForm'
import Item from './components/Item'

function ToDo() {
    const SAVED_ITEMS = "savedItems"
    const [items, setItem] = useState([]);

    useEffect(()=>{
        let savedItens = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if(savedItens){
            setItem(savedItens)
        }
    }, []);
    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items]);

    function onItemDelete(itemm){
        let itemFiltro = items.filter(it=>it.id !== itemm.id)
        setItem(itemFiltro)
    }

    function onAddItem(item){
        let it = new Item(item)
        setItem([...items, it])
    }

    function onDone(item){
        let ItemAtualizado = items.map(it =>{
            if(it.id === item.id){
                it.done = !it.done
            }
            return it
        })

        setItem(ItemAtualizado)
    }

    return (
        <div className='container'>
            <h1>T O D O</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <Lista onDone={onDone} onItemDelete={onItemDelete} items={items}></Lista>
        </div>
    )

}

export default ToDo