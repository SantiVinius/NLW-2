import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/62571775?s=400&u=ab0e65af41d1ef3c7372bf154715aefb43f3494c&v=4" alt="Vínius Santi"/>
                <div>
                    <strong>Vínius Santi</strong>
                    <span>Matemathics</span>
                </div>
            </header>
            <p>
                Apaixonado por números 
                <br /><br />
                Se algo na sua vida estiver negativo, multiplique por (-1)
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>

            </footer>
        </article>
    );
}

export default TeacherItem;

