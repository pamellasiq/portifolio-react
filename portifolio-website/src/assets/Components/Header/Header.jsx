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
            Uma estudante de Análise e Desenvolvimento de Sistemas apaixonada por tudo que envolve 
            desenvolvimento web. Gosto de trabalhar com HTML, CSS, JavaScript, jQuery, React e PHP 
            para criar projetos dinâmicos e cheios de personalidade. Além de desenvolvedora, também 
            sou web designer e ilustradora, sempre buscando novas formas de unir técnica e 
            criatividade.
            </p>
            <div className={headercss.social}>
                <i className="ri-linkedin-line"></i>
                <i className="ri-github-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-behance-line"></i>
            </div>
            <button>Download CV <i className="ri-download-line"></i></button>
        </div>
    )
}

export default Header