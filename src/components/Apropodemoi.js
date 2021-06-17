import React from 'react';
import photo from "../photo.jpg";
import CV from "../CV.pdf";

const aproposdemoi = 
        <div className="container py-5">
            <div className="row">
                
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">A propos de moi</h1><br/>
                    <p className="description">
                        Actuellement developpeur web en formation, je suis à la recherche d'une alternance pour septembre 2021.<br/>
                        Au cours de mon parcours, j'ai su acquérir de nombreuses compétences professionnelles. 
                        Désireux de relever de nouveaux challenges, motiver pour apprendre, également rigoureux, respectueux ,ponctuel, autonome et curieux.
                    </p>
                    <p className="about-heading">
                        lattana-s@hotmail.fr<br/>
                        <br/>
                    <a href={CV} download>
                        Telecharger mon CV
                    </a>
                    </p>

                </div>
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={photo} alt="photo" /> 
                    </div>
                </div>
            </div>            
        </div>

export default aproposdemoi
