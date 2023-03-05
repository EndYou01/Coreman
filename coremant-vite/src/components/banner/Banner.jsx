import coremantLogo from "../../assets/coremantLogo.svg";

export const Banner = () => {
	return (
		<div className="banner">
      <div className="banner_bg"></div>
      <div className="banner_opacity"></div>
			<div className="banner_info">
				<div className="logo-container">
					<img className="logo" src={coremantLogo} alt="coremant logo" />
				</div>

				<div>
					<h1 className="banner_title">
						When it absolutely, positively has to be readability in yor designs
					</h1>
				</div>
			</div>
		</div>
	);
};
