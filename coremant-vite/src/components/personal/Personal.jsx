import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";

export const Personal = () => {
	return (
		<>
		<h1 className="personal_h1">PERSONAL</h1>
		<div className="personal-container">

			<div className="personal_info_container">
				<div className="personal_info">
					<div className="img_personal-container">{/* IMAGEN */}</div>

					<h2>Alberto A. Dupotey Angulo</h2>
					<h3>Director General</h3>

					<div>
						<ul className="list">
							<li>
								<a href="#">
									<TiSocialTwitter
										style={{ color: "#00acee", fontSize: "5rem" }}
									/>
								</a>
							</li>
							<li>
								<a href="https://api.whatsapp.com/send?phone=5351419534&text=Coremant,%20espere%20un%20momento%20porfavor...">
									<FaWhatsapp style={{ color: "#25D366", fontSize: "4.2rem" }} />
								</a>
							</li>
							<li>
								<a href="#">
									<TfiFacebook
										style={{ color: " #3b5998", fontSize: "3.2rem" }}
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="personal_info">
					<div className="img_personal-container">{/* IMAGEN */}</div>

					{/* subdirector */}

					<h2>Leandro Camejo Grau</h2>
					<h3>Sub Director</h3>

					<div>
						<ul className="list">
							<li>
								<a href="https://twitter.com/CamejoGrau?t=cFEHb5w_qGy8JalHmGQG-Q&s=09">
									<TiSocialTwitter
										style={{ color: "#00acee", fontSize: "5rem" }}
									/>
								</a>
							</li>
							<li>
								<a href="https://api.whatsapp.com/send?phone=5354011887&text=Coremant,%20espere%20un%20momento%20porfavor...">
									<FaWhatsapp style={{ color: "#25D366", fontSize: "4.2rem" }} />
								</a>
							</li>
							<li>
								<a href="#">
									<TfiFacebook
										style={{ color: " #3b5998", fontSize: "3.2rem" }}
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};
