import React from "react";
import ferrLogo from "../../assets/ferrx2.png";
import { BackButton } from "../../components/backButton/BackButton";
import { Fade } from "react-awesome-reveal";

export const FerreteriaPage = () => {
	return (
		<Fade>
			<div>
				<header className="header">
					<div className="header_bg"></div>
					<div className="header_opacity"></div>
					<div className="header_info">
						
						<BackButton/>

						<div className="logo_page-container">
							<img src={ferrLogo} alt="ferreteria logo" />
						</div>
					</div>
				</header>

				<div className="page_info-container">
					<h1>FERRETERIA</h1>

					<div>
						<p>
							{" "}
							Venta al por mayor y por menor de útiles para el bricolaje, la construcción y necesidades del hogar. 
						</p>
					</div>
				</div>
				<div className="ver_catalogos-container">
					<h1>VER CATALOGOS</h1>
					<p>
						Aquí mantenemos actualizados nuestros catálogos en la plataforma Facebook en el grupo "Coremant - Ferretería"
					</p>

					<a href="https://www.facebook.com/profile.php?id=100090641827083&mibextid=ZbWKwL">
						<button className="see_button">Ver</button>
					</a>
				</div>
			</div>
		</Fade>
	);
};
