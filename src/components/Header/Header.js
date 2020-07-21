import React from 'react';
import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="./">Главная</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./feedback">Обратная связь</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./login">Логин</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./admin">Админка</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;