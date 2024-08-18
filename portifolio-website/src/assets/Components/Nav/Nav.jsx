import React, { useRef } from "react";
import navCSS from './Nav.module.css';

function Nav(){

    const nav = useRef();

    const menuHandler = ()=>{
        nav.current.classList.toggle(navCSS.showMenu)
    }

    return(
        <div className={navCSS.Nav_wrapper}>
            <div className={navCSS.logo}>
                <a href="#">P</a>
            </div>
            <ul ref={nav}>
                <li><a href="#">Início</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Avaliações</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
            <div className={navCSS.nav_btns}>
            <i className="ri-moon-line"></i>
            <i className="ri-menu-line" onClick={menuHandler}></i>
            </div>
        </div>
    )
}

export default Nav