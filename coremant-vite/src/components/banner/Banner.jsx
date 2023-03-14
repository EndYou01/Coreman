import coremantLogo from "../../assets/coremantLogo.png";
import 'animate.css';

export const Banner = () => {
	return (
		<div className="banner">
      <div className="banner_bg"></div>
      <div className="banner_opacity"></div>
			<div className="banner_info animate__animated animate__fadeInDown">
				<div className="logo-container">
					<img className="logo" src={coremantLogo} alt="coremant logo" />
				</div>

				<div>
					{/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
					<h1 className="banner_title">
						When it absolutely, positively has to be readability in yor designs
					</h1>
				</div>
			</div>
		</div>
	);
};
