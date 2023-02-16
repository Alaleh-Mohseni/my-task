import { useState, useContext } from 'react';
import { themeContext } from '../../contexts/theme';
import darkMode from '../../darkMode';
import './style.css';
import Header from '../Header';
import Items from '../Items';
import Actions from '../Actions';

const initialTasks = [
    { id: '1', text: 'کار 1' },
    { id: '2', text: 'کار 2' },
    { id: '3', text: 'کار 3' },
    { id: '4', text: 'کار 4' },
    { id: '5', text: 'کار 5' },
    { id: '6', text: 'کار 6' },
    { id: '7', text: 'کار 7' },
    { id: '8', text: 'کار 8' },
    { id: '9', text: 'کار 9' },
    { id: '10', text: 'کار 10' },
]



function Container() {
    const theme = useContext(themeContext)
    const [tasks, setTasks] = useState(initialTasks)
    const [searchQuery, setSearchQuery] = useState('')

    const allTasks = [...tasks]

    function handleAdd(text) {
        setTasks([...tasks, {id: `${Math.floor(Math.random() * 1000)}`, text}])
    }

    function handleDelete(id) {
        const removeTask = tasks.filter(item => item.id !== id)
        setTasks(removeTask)
    }

    function changeHandler(event) {
        setSearchQuery(event.target.value)
    }

    const searchResultTasks = tasks.filter(
        item => item.text.toUpperCase().startsWith(searchQuery.toUpperCase())
    )


    return (
        <main className={darkMode("Container", theme)}>
            <Header onChange={changeHandler} searchQuery={searchQuery}  />
            <Items tasks={searchResultTasks} onDelete={handleDelete}/>
            <Actions onAdd={handleAdd} allTasks={allTasks}/> 
        </main>
    )
}

export default Container;