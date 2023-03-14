import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

import ferr from "../../assets/ferrx2.jpg"
import food from "../../assets/foodx2.jpg"
import ofice from "../../assets/oficex2.jpg"
import { NavigateButton } from "../navigateButton/NavigateButton";

export const NuestrosServicios = () => {


	return (
		<div className="nuestros_servicios-container">
			<h1>NUESTROS SERVICIOS</h1>

			<Swiper
				// install Swiper modules
				modules={[Navigation]}
				navigation={true}
				pagination={{ clickable: true }}
				spaceBetween={20}
				slidesPerView='auto'
			>
				<SwiperSlide key={'1'}>
					<div className="servicios_container">
						<img src={ferr} className="servicios_container_logo" />

						<h3 className="servicios_container_h3">Ferretería</h3>

						<p className="servicios_container_text">Venta al por mayor y por menor de útiles para el bricolaje, la construcción y necesidades del hogar.</p>

						<NavigateButton route='ferreteria'/>

					</div>
				</SwiperSlide>

				<SwiperSlide key={'2'}>
					<div className="servicios_container">
						<img src={food} className="servicios_container_logo" />

						<h3 className="servicios_container_h3">Gastronomía</h3>

						<p className="servicios_container_text">Principales servicios que presta nuestro Restaurant.</p>

							<NavigateButton route='gastronomia'/>
					</div>
				</SwiperSlide>

				<SwiperSlide key={'3'}>
					<div className="servicios_container">
						<img src={ofice} className="servicios_container_logo" />

						<h3 className="servicios_container_h3">Materiales de Oficina</h3>

						<p className="servicios_container_text">Venta al por mayor y por menor de artículos, suministros de oficina y útiles escolares.</p>

							<NavigateButton route='mtroficina'/>
					</div>
				</SwiperSlide>
			</Swiper>

		</div>
	);
}
