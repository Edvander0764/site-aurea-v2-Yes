import React from 'react'
import { Link } from "react-router-dom";

import './style.scss'

import instagramIcon from '../../imgs/instagramIcon.png'
import facebookIcon from '../../imgs/facebookIcon.png'
import linkedinIcon from '../../imgs/linkedinIcon.png'
import logoAurea from '../../imgs/logoAurea2.png'
import mascote from '../../imgs/AureaMascote1.png'
import balaodefala from '../../imgs/Balaodefala.png'

export default function Footer (props) {


    return (

        <footer>

            
            <div className='about' >

            <h1>Sobre a Aurea</h1>

                <p>
                A Aurea é uma empresa sem fins lucrativos, composta 100% por estudantes graduandos do IFF Centro. Toda renda é reinvestida em conhecimento para nossos membros, através de cursos, equipamentos, infraestrutura e etc.
                </p>

            </div>

            <div className="rowObjects">

                <div className="rowObjects">

                    <div className='logoFooter' >


                        <img src={logoAurea} alt='logoAurea' />


                    </div>

                    <div className='adress' >

                        <p>Endereço: R. Dr. Siqueira, 273 - Parque Dom Bosco, Campos dos Goytacazes - RJ, 28030-130IFF Sala G-02</p>    

                        <p>Whatsapp: (21) 99015-7124</p>

                        <p>CNPJ: 27.447.124/0001-76</p>

                        <div className="socialMedia">
                            <a href='https://www.instagram.com/aureaej/' target="_blank" > <img src={instagramIcon} alt='logoInstagram' /> </a>
                            <a href='https://www.facebook.com/aureaej' target="_blank" > <img src={facebookIcon} alt='logoFacebook' /> </a>
                            <a href='https://www.linkedin.com/company/aureaej/'  target="_blank"> <img src={linkedinIcon} alt='logoLinkedin' /> </a>
                        </div>

                    </div>

                </div>

                <div className='mascoteFooter' >

                    <Link to='/contato'> <img src={balaodefala} alt="balaodefala"/> </Link>
                    <img src={mascote} alt="mascote"/>

                </div>

            </div>

            <div className="copyright">
                <h1>Desenvolvido com React.js © 2021 Aurea Empresa Júnior</h1>
            </div>


        </footer>

    )
}