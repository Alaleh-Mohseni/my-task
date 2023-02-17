import { useContext } from 'react';
import { themeContext } from '../../contexts/theme';
import darkMode from '../../darkMode';

import './style.css';

function Button(props) {
    const theme = useContext(themeContext)
    
    return (
        <button className={`${darkMode("Button", theme)} ${props.btnType}`} onClick={props.click}>
            {props.children}
        </button>
    )
}

export default Button;