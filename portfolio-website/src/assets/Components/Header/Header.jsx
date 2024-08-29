import React from "react";
import headercss from './../Header/Header.module.css';

import {ReactTyped} from "react-typed";

function Header() {
    return(
        <div className={headercss.header_wrapper}>
            <small>Olá, eu sou a Pâmella</small>
            <h2> <span>
                <ReactTyped
                    strings={['Desenvolvedora Full Stack' , 'Web Designer' , 'Ilustradora']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop={true}
                >

                </ReactTyped>
                </span>
            </h2>
            <p>
            Gosto de trabalhar com Desenvolvimento Web,
            para criar projetos dinâmicos e cheios de personalidade. Além de desenvolvedora, também 
            sou web designer e ilustradora, sempre buscando novas formas de unir técnica e 
            criatividade.
            </p>
            <div className={headercss.social}>
                <a href="https://www.linkedin.com/in/pamellasiq/" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-line"></i>
                </a>
                <a href="https://github.com/pamellasiq/" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-line"></i>
                </a>
                <a href="https://www.instagram.com/if_queira/" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line"></i>
                </a>
                <a href="https://www.behance.net/pamellasiqq" target="_blank" rel="noopener noreferrer">
                <i className="ri-behance-line"></i>
                </a>
            </div>
            <button>Download CV <i className="ri-download-line"></i></button>
        </div>
    )
}

export default Header