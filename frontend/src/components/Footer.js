import React from "react";
import github from "../assets/github.png"

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <h6>SITEMAP</h6>
      <a class="site_map" href="/">HOME</a><br/>
      <a class="site_map" href="/about">ABOUT</a><br/>
      <a class="site_map" href="/booking">CHARTERS & TOURS</a><br/>
      <a class="site_map" href="/fish">FISH INDEX</a><br/>
    <p>
      © 2022 MoonDancer Boat Charters Designed by <a href="https://github.com/AliPort">Alita Portillo</a>, 
      <a href="https://github.com/EPtackArts"> Elizabeth Ptack</a>, 
      <a href="https://github.com/BarbarianWizard"> Kevin Beck</a>, and
      <a href="https://github.com/wms09291963"> Captain William Smith  </a>
      <a href='https://github.com/AliPort/MoonDancer'><img id="github_logo" src={github} alt="github logo"/></a>
    </p>
  </footer>
);

export default Footer;