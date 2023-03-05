import React from "react";
import { useNavigate } from "react-router-dom";

import { FaFacebook } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import coremantLogo from "../../assets/coremantLogo.svg";
import { scrollToTop } from "../../functions/scrollToTop";

export const Footer = () => {

	let fecha = new Date().getFullYear()
	const navigate = useNavigate()

	return (
		<footer className="footer-container">
			
			<div className="footer_contain">
				
				<div className="img_footer-container">
					<img
						src={coremantLogo}
						alt="loco icon"
						onClick={() => {
							navigate('/')
							scrollToTop()
						}} />
				</div>

				<div>
					<h1>CONTACTANOS</h1>
					<p>
						sample text. Click to select the text box.click again or blab lablab
						jajaja eran textos de ejemplo
					</p>
				</div>

				<div>
					<h1>SIGUENOS</h1>
					<ul className='list'>
						<li>
							<a href="https://youtube.com/@coremant">
								<BsYoutube style={{ color: "#c4302b", fontSize: "3.7rem" }} />
							</a>
						</li>

						<li>
							<a href="https://www.facebook.com/profile.php?id=100086350780576&mibextid=ZbWKwL">
								<FaFacebook style={{ color: "#3b5998", fontSize: "3.2rem" }} />
							</a>
						</li>


						<li>
							<a href="https://www.instagram.com/invites/contact/?i=yo2ktwsyicc3&utm_content=pijssyq">
								<AiFillInstagram style={{ color: "#C13584", fontSize: "3.7rem" }} />
							</a>
						</li>
					</ul>
				</div>
				
			</div>

			<p>@{fecha} Coremant todos los derechos reservados</p>
		</footer>
	);
};
