import React from 'react';
import logo from "../logo.png"
// REACT FONTAWESOME IMPORTS //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import { Component } from 'react';


export default class Navbar extends Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed" style={{ width: "100%", marginTop: "-30px"}}>
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo.." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "grey" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link
                                activeClass="active"
                                to="header"
                                spy={true}
                                smooth={true}
                                offset={-200}
                                duration={250}
                            >
                                <a className="nav-link">Acceuil</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link
                                activeClass="active"
                                to="aboutme"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={250}
                            >
                                <a className="nav-link">A propos de moi</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="formation"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={250}
                            >
                                <a className="nav-link">Formations</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={250}
                            >
                                <a className="nav-link">Expériences</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="projets"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={250}
                            >
                                <a className="nav-link">Projets</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="competence"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={250}
                            >
                                <a className="nav-link">Comptences</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={250}
                            >
                                <a className="nav-link">Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}