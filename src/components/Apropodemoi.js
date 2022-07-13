import React from 'react';
import photo from "../photo.jpg";
import CV from "../CV.pdf";

const aproposdemoi = 
        <div className="container py-5">
            <div className="row">
                
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">A propos de moi</h1><br/>
                    <p className="description">
                        Me voila bientot en fin de formation de développeur web à EPITECH.<br/>
                        J’ai su acquérir de nombreuses compétences durant ma formation tels que <br/>
                        l’autonomie, la rigueur, la patience et la persévérance. <br/>
                        De plus j’ai pu aborder de nombreux langages de programmation tels que <br/>
                        PHP, JavaScript, Python, Ruby et ai une appétence sur le langage JavaScript et son Framework React.js que j’ai pu avoir d’avantages grâce à mes projets personels.
                        Je travail notamment sur le langage PHP (Laravel) au quotidien sur ma période d’alternance.<br/>
                        Ce que je cherche aujourd'hui ?<br/>
                        Une alternance débutant en novembre 2022 afin d'effectuer un Bachelor sur un rythme de 3 semaines / 1 semaine.
                        
                    </p>
                    <p className="about-heading">
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
