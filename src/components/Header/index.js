import { useContext } from 'react';
import { themeContext } from '../../contexts/theme';
import darkMode from '../../darkMode';
import './style.css';
import Input from '../Input';

function Header({onChange, searchQuery}) {
    const theme = useContext(themeContext)

    return (
        <header className={darkMode("Header", theme)}>
            <p className={darkMode("title", theme)}>
                لیست کارها
            </p>
            <Input
                type="text"
                value={searchQuery}
                placeholder="جستجوی کار..."
                change={onChange}
            />
        </header>
    )
}

export default Header;