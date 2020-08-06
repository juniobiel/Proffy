import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/1063126253497184257/kA975_ao_400x400.jpg" alt="Gabriel Júnio" />
                <div>
                    <strong>Gabriel Júnio</strong>
                    <span>Games</span>
                </div>
            </header>

            <p>
                Entusiasta em tecnologia e desenvolvimento de software e games.
                <br /><br />
                Tem tentado ganhar a vida de algum jeito mas ainda não deu um jeito de ganhar.

            </p>

            <footer>
                <p>
                    Preço/Hora 
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
);
}

export default TeacherItem;