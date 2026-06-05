import { initEyes } from '../script.js'

export function init() {
  initEyes()
}

export const template = `

    <div class="contacto-wrapper">
    <div class="frame">
		<main>
			<div class="text-layer">
				<span class="eyebrow">Soluciones a tu medida :)</span>

				<h1 class="headline">
					El Sistema<br>
					Que
				<span class="eyes-container">
						<span class="eye">
							<span class="pupil"></span>
						</span>
						<span class="eye">
							<span class="pupil"></span>
						</span>
					</span><br>
					<span class="yellow">Necesitas</span>
				</h1>

				<div class="text-cols">
					<div class="col">
						<span class="arrow">↘</span>
						<p class="description">¿Un sistema que tu equipo sí entienda y use?<br>Lo diseñamos. Y está a un mensaje de distancia.</p>
					</div>
				</div>
			</div>

			<div class="diagonal-line"></div>

			<div class="magnetic-area card-area">
				<div class="magnetic-item purple-card form-card">
					<p class="tag">#ContactoUX</p>
					<h3>Iniciemos el análisis<br>de tu próximo software.</h3>

					<form class="signup" onsubmit="event.preventDefault();">
						<input type="text" placeholder="Cual es tu nombre?" required>
						<input type="email" placeholder="Cual es tu email" required>
						<select required>
							<option value="" disabled selected>¿En qué podemos ayudarte?</option>
							<option value="cotizacion">Cotización de Sistema</option>
							<option value="consultoria">Consultoría UX/UI</option>
							<option value="soporte">Soporte / Dudas del Blog</option>
							<option value="otros">Otros</option>
						</select>
						<textarea placeholder="Cuéntanos tu idea..." rows="3" required></textarea>
						<button type="submit">Enviar Solicitud</button>
					</form>
				</div>
			</div>

		</main>
	</div>
    </div>
`
