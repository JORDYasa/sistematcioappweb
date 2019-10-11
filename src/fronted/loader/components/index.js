import React from 'react';
import './styin.css';
import Layout from './../../pageinicio/layout';
import Img1 from './../../../assets/destiny.jpg';
import Img2 from './../../../assets/Call-of-Duty.jpg';
import Img3 from './../../../assets/last.jpg';
import Img4 from './../../../assets/fornite.jpg';
import Img5 from './../../../assets/surge.jpg';
import Img6 from './../../../assets/sumario.jpg';
import Img7 from './../../../assets/sniper.jpg';
import Img8 from './../../../assets/watch.png';

const Index = (props) => {
    
    return (
        <Layout>
            <article class="contentall">
                <div class="precard">
                    <img class="imgportada"
                        src={Img1}
                    />
                    <p class="phara">
                    Destiny es un videojuego de disparos en primera persona, en forma de multijugador 
                    masivo en línea en un mundo abierto de ficción especulativa.​ Fue desarrollado por 
                    Bungie y publicado por Activision como parte de un contrato.
                    </p>
                </div>
            </article>
            <article class="contentall">
                <div class="precard">
                    <img class="imgportada"
                        src={Img2}
                    />
                    <p class="phara">
                    Call of Duty: Modern Warfare es un videojuego de disparo en primera persona que 
                    está siendo desarrollado por Infinity Ward y será publicado por Activision. 
                    Es el decimosexto juego de la saga Call of Duty y es un reboot de la serie 
                    Modern Warfare.
                    </p>
                </div>
            </article>
            <article class="contentall">
                <div class="precard">
                    <img class="imgportada"
                        src={Img3}
                    />
                    <p class="phara">
                    The Last of Us es un videojuego de acción-aventura y supervivencia de terror desarrollado por 
                    la compañía estadounidense Naughty Dog y distribuido por Sony Computer Entertainment para la consola 
                    PlayStation 3 en 2013.
                    </p>
                </div>
            </article>
            <article class="contentall">
                <div class="precard">
                    <img class="imgportada"
                        src={Img4}
                    />
                    <p class="phara">
                    Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games, 
                    lanzado como diferentes paquetes de software que presentan diferentes modos de 
                    juego, pero que comparten el mismo motor general de juego y las mecánicas.
                    </p>
                </div>
            </article>
            <article class="contentall">
                <div class="precard">
                    <img class="imgportada"
                        src={Img5}
                    />
                    <p class="phara">
                    The Surge 2 es un videojuego de acción y rol desarrollado por Deck13 Interactive 
                    y publicado por Focus Home Interactive para Microsoft Windows, PlayStation 4 y 
                    Xbox One. Es la secuela de The Surge de 2017.
                    </p>
                </div>
            </article>
            <article class="contentall">
                <div class="precard">
                    <img class="imgportada"
                        src={Img6}
                    />
                    <p class="phara">
                    Darksiders II es un videojuego de rol y acción aventura desarrollado por Vigil Games 
                    y publicado por THQ. Es la secuela de Darksiders y fue lanzado en agosto de 2012 
                    para PlayStation 3, y a finales del mismo para Wii 
                    U en todas las regiones.
                    </p>
                </div>
            </article>
            <article class="contentall">
                <div class="precard">
                    <img class="imgportada"
                        src={Img7}
                    />
                    <p class="phara">
                    Sniper Elite 4 es un videojuego de táctica en tercera persona diseñado por Rebellion 
                    Developments.​ Como la secuela directa de Sniper Elite III, el juego fue lanzado para 
                    Microsoft Windows, PlayStation 4 y Xbox One el 14 de febrero de 2017.​​
                    </p>
                </div>
            </article>
            <article class="contentall">
                <div class="precard">
                    <img class="imgportada"
                        src={Img8}
                    />
                    <p class="phara">
                    Watch Dogs es un videojuego de mundo abierto y acción-aventura que fue desarrollado 
                    por Ubisoft Montreal para las consolas Wii U, ​ PlayStation 4, ​ PlayStation 3, Xbox 
                    One, Xbox 360, así como para Microsoft Windows. 
                    </p>
                </div>
            </article>
        </Layout>
    );

};

export default Index;