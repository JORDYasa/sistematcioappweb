import React from 'react';
import './styfoo.css';

import Face from './../../assets/socialnetworks/facebook.png';
import Twitter from './../../assets/socialnetworks/twitter.png';
import U2 from './../../assets/socialnetworks/youtube.png';
const Footer = (props) => {
    
    return (
        <footer class="contentfooter">
            <div id="footer-columns">    
                <div class="col3">
                    <h3>Redes sociales</h3>
                        <ul>
                                <li> redes sociales y publicidad de la pagina</li>
                        </ul>
                </div>

                <div class="col3-center">
                    <h3>Pagina oficial</h3>
                        <ul>
                            <li>Pagina oficial para descargar los mejores juegos</li>
                        </ul>
                </div>

                <div class="col3">
                    <h3>Información y ayuda</h3>
                        <ul>
                            <li>Contactese co nosotros para más información</li>                  
                        </ul>
                </div>
            </div>
        </footer>
    );

};

export default Footer;