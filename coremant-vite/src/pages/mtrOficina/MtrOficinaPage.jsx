import React from "react";
import mtrOficeLogo from "../../assets/oficex2.jpg";
import { BackButton } from "../../components/backButton/BackButton";
import { Fade } from "react-awesome-reveal";

export const MtrOficinaPage = () => {
	return (
		<Fade>
			<div>
				<header className="header">
					<div className="mtrOffice_bg"></div>
					<div className="header_opacity"></div>
					<div className="header_info">

						<BackButton />

						<div className="logo_page-container">
							<img src={mtrOficeLogo} alt="ferreteria logo" />
						</div>
					</div>
				</header>

				<div className="page_info-container">
					<h1>Materiales de Oficina</h1>

					<div>
						<p>
							{" "}
							Venta al por mayor y por menor de artículos, suministros de oficina y útiles escolares.
						</p>
					</div>
				</div>
				<div className="ver_catalogos-container">
					<h1>VER CATALOGOS</h1>
					<p>
						Aquí mantenemos actualizados nuestros catálogos en la plataforma Facebook en el grupo "Coremant - Materiales de Oficina"
					</p>

					<a href="https://www.facebook.com/profile.php?id=100086768277776&mibextid=ZbWKwL">
						<button className="see_button">Ver</button>
					</a>

				</div>
			</div>
		</Fade>
	);
};
