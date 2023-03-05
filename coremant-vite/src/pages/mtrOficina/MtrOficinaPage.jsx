import React from "react";
import mtrOficeLogo from "../../assets/oficex2.png";

export const MtrOficinaPage = () => {
	return (
		<div>
			<header className="header">
				<div className="mtrOffice_bg"></div>
				<div className="header_opacity"></div>
				<div className="header_info">
					<div >
						<button>{"<"} Atras</button>
					</div>

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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
						facilis quia nulla aliquid deserunt laboriosam aspernatur suscipit
						eos molestiae reiciendis! Quas deserunt quis animi. Est pariatur
						unde repellendus temporibus deserunt!
					</p>
				</div>
			</div>
			<div className="ver_catalogos-container">
				<h1>VER CATALOGOS</h1>
				<p>
					We're a small creative design studio based in New York, working with
					adventurous clients and providing Creative Concepts, Branding, Graphic
					Design, Art Direction and Digital Communication services.
				</p>
				<button>SEE</button>
			</div>
		</div>
	);
};
