import React, { useState } from 'react'
import Logo from "img/LOGO.svg"
import "scss/_header.scss"

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className='header'>
            <div className="header__wrapper">
                <a className='header_logo' href="/src/pages/Main.jsx">
                    <img src={Logo} alt="Logo" className='logo'/>
                </a>
                <nav className='header__menu'>
                    <ul className="menu__list">
                        <li className="list__item">Работы</li>
                        <li className="list__item">Услуги</li>
                        <li className="list__item">О нас</li>
                        <li className="list__item">Отзывы</li>
                        <li className="list__item">Blog</li>
                        <li className="list__item">Контакты</li>
                    </ul>
                </nav>
                <button className="btn_header">
                    <p className='btn-text'>
                        Запросить стоимость
                    </p>
                </button>
                <div className={`burger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <div className={`burger-icon ${isMobileMenuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </div>
    )
}
