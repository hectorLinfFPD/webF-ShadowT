// Página de "Nuestro Trabajo" con scroll horizontal
import imgpapuaF from '../assets/papuaF.png'
import imgytinM from '../assets/ytinM.png'
import imgrenM from '../assets/renM.png'

import { initScroll } from '../script.js'

export function init() {
  initScroll()
}

export const template = `
     <div class="qs">
		<div class="progress-bar"></div>

		<div class="progress-counter">
			<h1>0</h1>
		</div>

		<div class="scroller">
			<section class="intro">
				<h1>Ideas que se tranforman, Una linea a las vez</h1>
				<h2>
					Del análisis conceptual al software funcional. Explora los sistemas y las soluciones que hemos estructurado para entornos reales.
				</h2>
			</section>

			<section class="hero-img">
				<img src="${imgpapuaF}" alt="Demostrasio de la app papuaFit" />
			</section>

			<section class="header">
				<h1>
					No es solo entrenar — Es medir cada cambio
                    en tu operación
				</h1>
			</section>

			<section class="about">
				<div class="row">
					<div class="copy">
						<p>
							La disciplina no sigue un camino fácil, exige estructura. 
							PapuaFit nace de la necesidad de fusionar la potencia de la gestión deportiva con un diseño de interfaz impecable.
							Creamos un entorno digital que elimina la fricción en el registro de usuarios, 
							control de accesos y flujos de entrenamiento. Menos desorden administrativo, más enfoque en tus metas.
						</p>
					</div>
					<div class="img">
						<img src="${imgrenM}" alt="Rendimiento en la actividad fisica" />
					</div>
				</div>
				<h1>Rendimiento en Movimiento</h1>
			</section>

			<section class="banner-img">
				<img src="${imgytinM}" alt="Miniatura de yt papuaFit"/>
			</section>

			<section class="story">
				<h1>Entrena el Proceso</h1>
				<h1>Controla Cada Dato</h1>
				<h1>Rompe tus Limites</h1>
			</section>
		</div>
	</div>
`
