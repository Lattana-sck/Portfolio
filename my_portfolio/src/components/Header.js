import React from 'react';
import Typed from 'react-typed';

const Header =
       <div className="header-wraper">
           <div className="main-info">
                <br />
                <Typed 
                    className="typed-text"
                    strings={["Moi", "Mes projets", "Mes expériences", "Lattana", "Soucksengphet"]}
                    typeSpeed={30}
                    backSpeed={60}
                    loop
                />
           </div>
       </div>

export default Header
