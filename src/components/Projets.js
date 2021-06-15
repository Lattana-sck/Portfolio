import React from 'react';
import freeads from '../projet-img/projet-freeads.png';
import puissance4 from '../projet-img/projet-puissance4.png';
import snapchat from '../projet-img/projet-snapchat.png';
import tweetacademie from '../projet-img/projet-tweetacademie.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager, PopupboxContainer } from "react-popupbox/dist/react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



// FREEADS
const openPopupboxFreeads = () => {
    const content = (
        <>
            <h3>FreeAds</h3>
            <img className="projet-image-popupbox" src={freeads} alt="Freeads projet" />
            <p>Le but de ce projet est de faire un site de petites annonces. <br />
                Pouvoir éditer une annonce, consulter toutes les annonces, messagerie entre utilisateur...</p>
            <p>Langages / Framworks : PHP / Laravel / SQL</p>
            <b>GitHub :</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Lattana-sck/FreeAds")} >https://github.com/Lattana-sck/FreeAds</a>
        </>
    )
    PopupboxManager.open({ content })
};

const popupboxConfigFreeads = {
    fadeIn: true,
    fadeInSpeed: 500
};

// PUISSANCE4
const openPopupboxPuissance4 = () => {
    const content = (
        <>
            <h3>Puissance4</h3>
            <img className="projet-image-popupbox" src={puissance4} alt="Puissance4 projet" />
            <p>Le but de ce projet est de réaliser un jeu reprenant les règles du célèbre jeu de Puissance4 ...</p>
            <p>Langages / Framework : HTML / CSS / JS / JQUERY</p>
            <b>GitHub :</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Lattana-sck/Puissance4")} >https://github.com/Lattana-sck/Puissance4</a>
        </>
    )
    PopupboxManager.open({ content })
};

const popupboxConfigPuissance4 = {
    fadeIn: true,
    fadeInSpeed: 500
};

// Snapchat
const openPopupboxSnapchat = () => {
    const content = (
        <>
            <h3>Snapchat</h3>
            <img className="projet-image-popupbox" src={snapchat} alt="Snapchat projet" />
            <p>Le but de ce projet est de créer une application mobile qui envoie des images a vos amis pour un certain laps de temps, <br />
                puis qui seront supprimés par la suite...</p>
            <p>Langages / Framework : React, React NATIVE, </p>
            <b>GitHub :</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Lattana-sck/Snapchat")} >https://github.com/Lattana-sck/Snapchat</a>
            
           
        </>
    )
    PopupboxManager.open({content})
};

const popupboxConfigSnapchat = {
                        fadeIn: true,
    fadeInSpeed: 500
};
 // TWEETACADEMIE
 const openPopupboxTweetacademie = () => {
    const content = (
        <>
                        <h3>Tweetacademie</h3>
                        <img className="projet-image-popupbox" src={tweetacademie} alt="tweetacademie projet" />
                        <p>Le but de ce projet est de créer un réseau social pour les étudiants de notre promotion, qui aura les mêmes
                fonctionnalités que twitter. <br />
                Pouvoir (un)follow un autre utilisateur, poster des tweets ainsi que les retweeter...</p>
                        <p>Langages / Framwork : PHP / HTML / CSS / JS / SQL </p>
                        <b>GitHub :</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Lattana-sck/Tweet-academie")} >https://github.com/Lattana-sck/Tweet-academie</a>
                    </>
    )
    PopupboxManager.open({content})

};

const popupboxConfigTweetacademie = {
                        fadeIn: true,
    fadeInSpeed: 500
};

const Projets =

        <div className="projet-wrapper">
                        <div className="container">
                            <h1 className="text-uppercase text-center py-5">Mes projets</h1>

                            <div className="image-box-wrapper row justify-content-center">

                                <div className="projet-image-box" onClick={openPopupboxFreeads}>
                                    <img className="projet-image" src={freeads} alt="projet-freeads" />
                                    <div className="overflow"></div>
                                    <FontAwesomeIcon className="projet-icon" icon={faSearchPlus} />
                                </div>


                                <div className="projet-image-box" onClick={openPopupboxPuissance4}>
                                    <img className="projet-image" src={puissance4} alt="projet-puissance4" />
                                    <div className="overflow"></div>
                                    <FontAwesomeIcon className="projet-icon" icon={faSearchPlus} />
                                </div>

                                <div className="projet-image-box" onClick={openPopupboxSnapchat}>
                                    <img className="projet-image" src={snapchat} alt="projet-snapchat" />
                                    <div className="overflow"></div>
                                    <FontAwesomeIcon className="projet-icon" icon={faSearchPlus} />
                                </div>

                                <div className="projet-image-box" onClick={openPopupboxTweetacademie}>
                                    <img className="projet-image" src={tweetacademie} alt="projet-tweetacademie" />
                                    <div className="overflow"></div>
                                    <FontAwesomeIcon className="projet-icon" icon={faSearchPlus} />
                                </div>

                            </div>

                        </div>
                        <PopupboxContainer {...popupboxConfigFreeads} />
                        <PopupboxContainer {...popupboxConfigPuissance4} />
                        <PopupboxContainer {...popupboxConfigSnapchat} />
                        <PopupboxContainer {...popupboxConfigTweetacademie} />
                    </div>



export default Projets;
