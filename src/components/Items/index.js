import './style.css';
import Item from '../Item';

function Items({tasks, onDelete}) {
    function renderResults() {
        if (tasks.length === 0) {
            return <p className='parag'>کاری پیدا نشد</p>
        }

        return (
            tasks.map(
                task => <Item
                    key={task.id}
                    taskId={task.id}
                    title={task.text}
                    onDelete={() => onDelete(task.id)}
                />
            ))
    }

    return (
        <div className="Items">
            <ul className='item_tasks'>
                {renderResults()}
            </ul>
        </div>
    )
}

export default Items;