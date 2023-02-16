import './style.css';
import Button from '../Button';

function Item({ title, onDelete }) {
    return (
        <li key={title} className="Item">
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