import { useContext } from 'react';
import { themeContext } from '../../contexts/theme';
import darkMode from '../../darkMode'
import './style.css';
import Button from '../Button';

function Item({ title, onDelete }) {
    const theme = useContext(themeContext)

    return (
        <li key={title} className={darkMode("Item", theme)}>
            <p>
                {title}
            </p>
            <Button
                btnType="remove-item"
                click={onDelete}>
                x
            </Button>
        </li>
    )
}

export default Item;