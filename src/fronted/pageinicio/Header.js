
import React from 'react';
import Logo from './../../assets/Logo.png';
import './styleinicio.css'

const Header= () =>{

    return(

        <div class="Navigation">  

            <div class="containerimg">

                <img class="imglogo" src={Logo}></img>

            </div>
            
            <div class="containermenu">
                <ul >
                    <div class="options">

                        <li><a>Inicio</a></li>
                        <li><a>Novedades</a></li>
                        <li><a>Mas populares</a></li>
                        <li><a>Online</a></li>
                        <li><a>Offline</a></li>
                        
                    </div>
                </ul>
            </div>

        </div>
        
    );
  
};

export default Header