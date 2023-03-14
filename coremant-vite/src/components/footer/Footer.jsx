import React from "react";
import { useNavigate } from "react-router-dom";

import { FaFacebook } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";

import coremantLogo from "../../assets/coremantLogo.png";
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
						className='logo_footer'
						alt="loco icon"
						onClick={() => {
							navigate('/')
							scrollToTop()
						}} />
				</div>

				<div>
					<h1>CONTACTANOS</h1>
					<ul className="footer_list">
						<li>
							<HiOutlineMail className='footer_icon' />
							<a 
								href="mailto:empcoremant@gmail.com"
								target="_blank"
                				rel="noreferrer"
								className="footer_text"
							>
								empcoremant@gmail.com
							</a>
						</li>

						<li>
							<HiPhone className='footer_icon' />
							<span 
                				rel="noreferrer"
								className="footer_text"
							>
								+53 56269470
							</span>
						</li>
						
						<li>
							<HiPhone className='footer_icon' />
							<span 
                				rel="noreferrer"
								className="footer_text"
							>
								+53 56403675
							</span>
						</li>
						
					</ul>
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
