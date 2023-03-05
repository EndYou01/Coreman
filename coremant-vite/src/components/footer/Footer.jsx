import React from "react";
import { FaFacebook } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import coremantLogo from "../../assets/coremantLogo.svg";

export const Footer = () => {
	
  let fecha = new Date().getFullYear()

  return (
		<footer className="footer-container">
			<div className="img_footer-container">
				<a href="">
					<img src={coremantLogo} alt="loco icon" />
				</a>
			</div>
			<h1>CONTACTANOS</h1>
			<p>
				sample text. Click to select the text box.click again or blab lablab
				jajaja eran textos de ejemplo
			</p>
			<h1>SIGUENOS</h1>
			<ul className='list'>
				<li>
					<a href="#">
            <BsYoutube style={{color: "#c4302b", fontSize: "3.7rem" }} />
          </a>
				</li>
        
				<li>
					<a href="#">
            <FaFacebook style={{ color: "#3b5998", fontSize: "3.2rem" }}/>
          </a>
				</li>


				<li>
					<a href="#">
            <AiFillInstagram style={{color: "#C13584", fontSize: "3.7rem" }} />
          </a>
				</li>
			</ul>
      <p>@{fecha} Coremant todos los derechos reservados</p>
		</footer>
	);
};
