import React from 'react'
import Logo from "img/LOGO.svg"
import "scss/_header.scss"

export default function Header() {
    return (
        <div>
            <div className="header">
                <h1>Header</h1>
                <a className='header_logo' href="/src/pages/Main.tsx">
                    <img src={Logo} alt="Logo" />
                </a>
                <ul className="">
                    <li className="">Работы</li>
                    <li className="">Услуги</li>
                    <li className="">О нас</li>
                    <li className="">Отзывы</li>
                    <li className="">Blog</li>
                    <li className="">Контакты</li>
                </ul>
                <button className="btn_header">Запросить стоимость</button>
            </div>
        </div>
    )
}
