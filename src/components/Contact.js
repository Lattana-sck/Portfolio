import Typed from 'react-typed';
import emailjs from 'emailjs-com';
import React from "react";
import photo from "../photo.jpg";

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_ewycfwd', e.target, 'user_lP8XPa7ygwpbW5v48kZ3K')
        window.alert('Votre email a été envoyé !');
        window.location.href = "http://localhost:3000/";
    }

const Contact =
    <>
        <div className="contact-form">
            <div className="text">

                <Typed
                    className="typed-text"
                    strings={["Formulaire de contact"]}
                    typeSpeed={30}
                    backSpeed={60}
                    loop
                />
                <br />
            </div>

            <div className="contact-page">
                <div className="form">
                    <form className="formulaire" onSubmit={sendEmail}>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Votre nom</label>
                            <input type="text" class="form-control" name="name" id="exampleFormControlInput1" placeholder="votre nom..." required />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Votre adresse e-mail</label>
                            <input type="email" class="form-control" name="email" id="exampleFormControlInput2" placeholder="votre@adresse-mail.com" required />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Votre message</label>
                            <textarea class="form-control" name="content" id="exampleFormControlTextarea1" rows="3" placeholder="Votre message..." required ></textarea>
                        </div>
                        <button type="submit" class="bouton">Envoyer</button>
                    </form>
                </div>
                
            </div>
            <div className="img-box">
                    <img className="profile-img1" src={photo} alt="photo" />
            </div>

        </div>


    </>

export default Contact

