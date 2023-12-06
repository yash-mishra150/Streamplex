import React, { useState } from "react";
import Particles from "react-tsparticles";
import Whitebars from "./Whitebars.svg";
import streamplex from "./streamplex_Main.png";
import { Link } from "react-router-dom";
import './HomePage.css';

function HomePage() {
  return (
    <div className="Mainpage">
      <Particles
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
            position: "fixed",
          },
          particles: {
            number: {
              value: 25,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "star",
              options: {
                sides: 6,
              },
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: false,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 360,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: ["grab"],
              },
              onclick: {
                enable: false,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 300,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 100,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />

      <input type="checkbox" id="active" />
      <label for="active" class="menu-btn">
        <img src={Whitebars} alt="ImageNA" class="bars" />
      </label>
      <div class="wrapper">
        <ul>
          <li>
            <Link className="a" to="/">About</Link>
          </li>
          <li>
          <Link className="a" to="/">Login</Link>
          </li>
          <li>
          <Link className="a" to="/">Register</Link>
          </li>
          <li>
          <Link className="a" to="/">Gallery</Link>
          </li>
          <li>
          <Link className="a" to="/">Feedback</Link>
          </li>
        </ul>
      </div>
      <div className="none">
        <img src={streamplex} alt="ImageNA" className="MainLogoImage" />

        <button className="GetStarted">Get Started</button>
      </div>
    </div>
  );
}

export default HomePage;
