import React from 'react';
import freeads from '../projet-img/projet-freeads.png';
import puissance4 from '../projet-img/projet-puissance4.png';
import snapchat from '../projet-img/projet-snapchat.png';
import ecommerce from '../projet-img/projet-ecommerce.png';
import previouslyon from '../projet-img/projet-previouslyon.png';
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
    PopupboxManager.open({ content })
};

const popupboxConfigSnapchat = {
    fadeIn: true,
    fadeInSpeed: 500
};

// ECOMMERCE
const openPopupboxEcommerce = () => {
    const content = (
        <>
            <h3>Ecommerce</h3>
            <img className="projet-image-popupbox" src={ecommerce} alt="Ecommerce projet" />
            <p>Le but de ce projet est de faire un site E-commerce <br />
                Pouvoir consulter les produits, acheter sans se connecter, s'inscrire...</p>
            <p>Langages / Framworks : Symfony / React</p>
            <b>GitHub :</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Lattana-sck/Ecommerce")} >https://github.com/Lattana-sck/Ecommerce</a>
        </>
    )
    PopupboxManager.open({ content })
};
const popupboxConfigEcommerce = {
    fadeIn: true,
    fadeInSpeed: 500
};

// FREEADS
const openPopupboxPreviouslyon = () => {
    const content = (
        <>
            <h3>Previously On</h3>
            <img className="projet-image-popupbox" src={previouslyon} alt="Previously_On projet" />
            <p>Le but de ce projet est de créer une application de calendrier de série a partir d'une API.<br />
                Pouvoir consulter les séries a voir ainsi que leurs saison/episodes, ajouter des séries en favoris, chatter entre membre du site etc.. </p>
            <p>Langages / Framworks : Node.js / Next.js</p>
            <b>GitHub :</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Lattana-sck/Previously_On")} >https://github.com/Lattana-sck/Previously_On</a>
        </>
    )
    PopupboxManager.open({ content })
};

const popupboxConfigPreviouslyon = {
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

                <div className="projet-image-box" onClick={openPopupboxEcommerce}>
                    <img className="projet-image" src={ecommerce} alt="projet-Ecommerce" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="projet-icon" icon={faSearchPlus} />
                </div>

                <div className="projet-image-box" onClick={openPopupboxPreviouslyon}>
                    <img className="projet-image" src={previouslyon} alt="projet-previouslyon" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="projet-icon" icon={faSearchPlus} />
                </div>
            </div>

        </div>
        <PopupboxContainer {...popupboxConfigFreeads} />
        <PopupboxContainer {...popupboxConfigPuissance4} />
        <PopupboxContainer {...popupboxConfigSnapchat} />
        <PopupboxContainer {...popupboxConfigEcommerce} />
        <PopupboxContainer {...popupboxConfigPreviouslyon} />
    </div>



export default Projets;
