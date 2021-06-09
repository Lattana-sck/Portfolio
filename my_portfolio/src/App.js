import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import AboutMe from "./components/Apropodemoi";
import Formation from "./components/Formation";
import Experience from "./components/Experiences";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import Competence from "./components/Competences";
import Section from "./components/Section";
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (

      <>
        <Particles
          params={{
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 0.5,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 20,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,

          }}
        />
        <div className="App">
          <Navbar />
          <Section
            subtitle={Header}
            dark={true}
            id="header" />
          <Section
            subtitle={AboutMe}
            dark={false}
            id="aboutme"
          />
          <Section
            subtitle={Formation}
            dark={false}
            id="formation"
          />
          <Section
            subtitle={Experience}
            dark={false}
            id="experience"
          />
          <Section
            subtitle={Projets}
            dark={true}
            id="projets"
          />
          <Section
            subtitle={Competence}
            dark={true}
            id="competence"
          />
          <Section
            subtitle={Contact}
            dark={false}
            id="contact"
          />

        </div>
        
      </>

    );
  }
}
