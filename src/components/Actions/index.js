import { useState, useContext } from 'react';
import { themeContext } from '../../contexts/theme';
import darkMode from '../../darkMode'
import './style.css';
import Button from '../Button';
import Input from '../Input';

function Actions({ onAdd, allTasks }) {
    const theme = useContext(themeContext)
    const [newName, setNewName] = useState('');
    const [error, setError] = useState(false)
    const [duplicateError, setDuplicateError] = useState(false)

    function handleCancel() {
        setNewName('')
        setError('')
        setDuplicateError('')
    }

    function handleConfirm(event) {
        event.preventDefault()
        if (!newName || newName === 0) {
            setError(true)
            return
        } else if (allTasks.some(item => item.text === newName)) {
            setDuplicateError(true)
            return
        }

        onAdd(newName)
        setNewName('')
        setError('')
        setDuplicateError('')
    }

    return (
        <form className={darkMode("Actions", theme)}>
            <Input
                type="text"
                value={newName}
                placeholder="اضافه کردن کار..."
                change={e => setNewName(e.target.value)}
            />
            {error && <p className='parag'>این مقدار اجباری است</p>}
            {duplicateError && <p className='parag'>این کار قبلا اضافه شده است</p>}
            <div className='button-box'>
                <Button
                    btnType={darkMode("secondary", theme)}
                    click={handleCancel}
                >
                    منصرف شدم
                </Button>
                <Button btnType="primary" click={handleConfirm}>تایید</Button>
            </div>
        </form>
    )
}

export default Actions;