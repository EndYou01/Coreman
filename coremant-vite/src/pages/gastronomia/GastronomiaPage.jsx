import React from "react";
import foodLogo from "../../assets/foodx2.png";
import { BackButton } from "../../components/backButton/BackButton";
import { Fade } from "react-awesome-reveal";

export const GastronomiaPage = () => {
	return (
		<Fade>
			<div>
				<header className="header">
					<div className="gastronomia_bg"></div>
					<div className="header_opacity"></div>
					<div className="header_info">
						<BackButton/>

						<div className="logo_page-container">
							<img src={foodLogo} alt="gastronomia logo" />
						</div>
					</div>
				</header>

				<div className="page_info-container">
					<h1>Gastronomía</h1>

					<div>
						<p>
							{" "}
							Principales servicios que presta nuestro Restaurant.
						</p>
					</div>
				</div>
				<div className="ver_catalogos-container">
					<h1>VER CATALOGOS</h1>
					<p>
						Aquí mantenemos actualizados nuestros catálogos en la plataforma Facebook en el grupo "Coremant - Servicios de Gastronomía"
					</p>

					<a href="https://www.facebook.com/profile.php?id=100090931591026&mibextid=ZbWKwL">
						<button className="see_button">Ver</button>
					</a>
				</div>
			</div>
		</Fade>
	);
};
