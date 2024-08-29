import React, { useEffect, useState } from "react";
import aboutCSS from './../About/About.module.css'
import aboutImg from '../../../assets/images/about-bg.png'

function About() {

    // calculo de quantidade de repositório
    const [repos, setRepos] = useState([]);

    const handleRepos = async () => {
        setRepos(null);

        const newRepo = await fetch('https://api.github.com/users/pamellasiq/repos');
        const dadosObj = await newRepo.json();
        
        if(dadosObj.length) {
            setRepos(dadosObj);
        }
    }

    // calculo de anos de experiencia
    const [yearsExperience, setYearsExperience] = useState(0);

    const calculateYearsFrom = (startDate) => {
        const start = new Date(startDate);
        const today = new Date();
        const differenceInTime = today - start;
        const differenceInYears = differenceInTime / (1000 * 3600 * 24 * 365.25); // Convertendo milissegundos para anos
        return Math.floor(differenceInYears); // Arredondando para baixo
    }

    useEffect(() => {
        handleRepos();

        const experienceStartDate = '2019-11-01'; // Data de início da experiência
        const years = calculateYearsFrom(experienceStartDate);
        setYearsExperience(years);

    }, []);

    return(
        <div className={`${aboutCSS.about_wrapper} section`}>
            <div className={`${aboutCSS.sec_title} section_title`}>
                <h2>Sobre mim</h2>
                <p>
                Me chamo Pâmella Siqueira, tenho 22 anos e sou estudante de Análise e Desenvolvimento 
                de Sistemas. Minha paixão pelo desenvolvimento web é o que me inspira, e estou sempre 
                explorando novas tecnologias e técnicas para criar experiências digitais que realmente 
                façam a diferença.
                </p>
                <div className={aboutCSS.about}>
                    <div className={aboutCSS.aboutImg}>
                        <img src={aboutImg} alt="Foto de perfil de Pâmella Siqueira" />
                    </div>
                    <div className={aboutCSS.about_content}>
                        <h3>Pâmella Siqueira, São Paulo.</h3>
                        <p>
                        Trabalho com ferramentas como HTML, CSS, JavaScript, jQuery, 
                        React e PHP, criando soluções únicas e personalizadas. Além de desenvolvedora, 
                        também sou web designer e ilustradora, sempre buscando harmonizar a técnica com 
                        a arte em cada projeto que realizo.
                        </p>
                        <div className={aboutCSS.details}>
                        <div className={aboutCSS.detail}>
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

                        </div>

                        <button className="btn">Saiba mais<i className="ri-user-line"></i></button>
                    </div>
                </div>

                <div className={aboutCSS.experience_counters}>
                    <div className={aboutCSS.experience_counter}>
                        <h2><span>+{repos ? repos.length : 0}</span> Projetos</h2>
                    </div>
                    <div className={aboutCSS.experience_counter}>
                        <h2><span>+{yearsExperience} {yearsExperience === 1 ? 'ano' : 'anos'}</span> de Experiência</h2>
                    </div>
                    <div className={aboutCSS.experience_counter}>
                        <h2><span>+20</span> Certificados</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About