/**
 * CONSTANTE: template
 * Versión final de la sección "Quiénes Somos" adaptada para corregir colisiones visuales.
 * Introduce un bloque de indicadores clave en la columna 2 en sustitución de la caja gráfica,
 * e implementa el sistema elástico superpuesto de "Silueta a Imagen Real" en el Core Team.
 */
export const template = `
  <div class="quienes-somos-fullscreen-container" style="padding-top: 110px; width: 100%; height: 100vh; display: grid; grid-template-columns: 1.1fr 1fr 1.2fr; overflow: hidden; box-sizing: border-box;">
    
    <!-- COLUMNA 1: CARTEL TIPOGRÁFICO AJUSTADO (MÁRGENES CORREGIDOS) -->
    <div class="qs-col-identity" style="border-right: 2px solid #000; padding: 30px; display: flex; flex-direction: column; justify-content: space-between; background: transparent; box-sizing: border-box; position: relative;">
      
      <!-- margin-top de 40px agregado para evitar colisiones con las líneas del logotipo izquierdo -->
      <header class="section-header" style="position: relative; z-index: 2; margin-top: 40px;">
        <h1 class="animate-qs-title" style="font-family: 'Space Grotesk', sans-serif; font-size: 3.5rem; text-transform: uppercase; font-weight: 900; line-height: 0.9; letter-spacing: -2px; margin: 0; opacity: 0; transform: translateY(40px);">
          <span style="font-size: 1.8rem; color: #3b4cca; display: block; letter-spacing: 1px; font-weight: 700; margin-bottom: 5px;">// ABOUT_US</span>
          CONOCE AL<br>
          <span style="font-size: 4.5rem; background: #000; color: #fff; padding: 2px 10px; display: inline-block; margin-top: 5px; margin-bottom: 5px;">EQUIPO</span><br>
          <span style="font-size: 5.5rem; color: transparent; -webkit-text-stroke: 2px #000; display: block; line-height: 0.8; font-weight: 900;">SHADOW</span>
        </h1>
      
      </header>

      <!-- Bloques de Misión y Visión -->
      <div class="qs-pilars-stack" style="display: flex; flex-direction: column; gap: 15px; position: relative; z-index: 2;">
        <div class="animate-qs-card" style="border: 2px solid #000; padding: 15px 20px; background: #fff; box-shadow: 4px 4px 0px #000; opacity: 0; transform: translateY(30px);">
          <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; text-transform: uppercase; color: #3b4cca; margin: 0; font-weight: 700;">// Misión</h3>
          <p style="font-family: 'Inter', sans-serif; margin-top: 5px; color: #222; font-size: 0.85rem; line-height: 1.4; margin-bottom: 0;">
            Impulsar todo negocio mediante interfaces de alta fidelidad y permanencia que optimicen cada operación.
          </p>
        </div>

        <div class="animate-qs-card" style="border: 2px solid #000; padding: 15px 20px; background: #000; color: #fff; box-shadow: 4px 4px 0px #3b4cca; opacity: 0; transform: translateY(30px);">
          <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; text-transform: uppercase; margin: 0; font-weight: 700;">// Visión</h3>
          <p style="font-family: 'Inter', sans-serif; margin-top: 5px; color: #ccc; font-size: 0.85rem; line-height: 1.4; margin-bottom: 0;">
            Consolidarnos como la mejor opción tecnológica brindando servicios de calidad premium en nuestra región.
          </p>
        </div>
      </div>
        <p class="animate-qs-desc" style="font-family: 'Inter', sans-serif; font-size: 0.95rem; line-height: 1.5; margin-top: 25px; color: #333; max-width: 280px; border-left: 3px solid #3b4cca; padding-left: 12px; opacity: 0; transform: translateY(20px);">
          Un laboratorio de ingeniería y diseño profesional donde la usabilidad y la estetica coexisten a travez de el desarrollo de interfaces de calidad
        </p>
    </div>

    <!-- COLUMNA 2: NARRATIVA HISTÓRICA & BLOQUE DE RENDIMIENTO METROLÓGICO -->
    <div class="qs-col-history" style="border-right: 2px solid #000; padding: 40px; display: flex; flex-direction: column; overflow-y: auto; box-sizing: border-box; scrollbar-width: thin;">
      
      <div class="animate-qs-history" style="opacity: 0; display: flex; flex-direction: column; gap: 30px;">
        <div>
          <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 2.2rem; text-transform: uppercase; margin-top: 0; margin-bottom: 20px;">
            Nuestra Historia
          </h2>
          <p style="font-family: 'Inter', sans-serif; font-size: 1.05rem; line-height: 1.6; color: #222;">
           Nacimos bajo el concepto de "ShadowTech" como respuesta a un panorama digital saturado de plantillas genéricas. Lo que comenzó como un proyecto de aula se transformó en un laboratorio de desarrollo enfocado en la usabilidad pura.
          </p>
          <p style="font-family: 'Inter', sans-serif; font-size: 1.05rem; line-height: 1.6; color: #222;">
            Creemos firmemente que el software no solo debe ser funcional, sino también una experiencia satisfactoria. Cada línea de código que escribimos está pensada para potenciar la identidad de nuestros clientes.
          </p>
        </div>

        <!-- NUEVO ELEMENTO: Indicadores de Rendimiento de la Agencia en lugar de la caja gráfica gris -->
        <div class="metrics-frame" style="border: 2px solid #000; padding: 25px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; background: #fff; box-shadow: 6px 6px 0px #000; margin-top: 10px;">
          <div style="border-bottom: 2px solid #000; padding-bottom: 10px;">
            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 900; color: #3b4cca; display: block;">03</span>
            <span style="font-family: 'Inter', sans-serif; font-size: 0.75rem; text-transform: uppercase; font-weight: bold; color: #555;">Ingenieros Core</span>
          </div>
          <div style="border-bottom: 2px solid #000; padding-bottom: 10px;">
            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 900; display: block;">09+</span>
            <span style="font-family: 'Inter', sans-serif; font-size: 0.75rem; text-transform: uppercase; font-weight: bold; color: #555;">Tecnologías</span>
          </div>
          <div style="grid-column: span 2;">
            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 1.3rem; font-weight: 900; text-transform: uppercase; display: block; color: #000;">// RESPONSABILIDAD COMPARTIDA</span>
            <span style="font-family: 'Inter', sans-serif; font-size: 0.8rem; color: #666;">Estrategia meticulosa y soporte interno constante para garantizar el mejor resultado.</span>
          </div>
        </div>
      </div>

    </div>

    <!-- COLUMNA 3: EXPEDIENTES DEL CORE TEAM CON INTERACCIÓN DE IMAGEN SUPERPUESTA -->
    <div class="qs-col-team" style="padding: 40px; overflow-y: auto; display: flex; flex-direction: column; gap: 30px; box-sizing: border-box; scrollbar-width: thin;">
      
      <h2 class="animate-qs-team-title" style="font-family: 'Space Grotesk', sans-serif; font-size: 2.2rem; text-transform: uppercase; margin-top: 0; margin-bottom: 10px; opacity: 0; transform: translateY(20px);">
        Core Team / <span style="color: #3b4cca;">Estructura</span>
      </h2>

      <div class="team-cards-stack" style="display: flex; flex-direction: column; gap: 30px;">
        
        <!-- Ficha 01: Emmanuel -->
        <div class="animate-qs-member" style="border: 2px solid #000; padding: 20px; display: grid; grid-template-columns: 100px 1fr; gap: 20px; background: transparent; opacity: 0; transform: translateY(30px); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);"
             onmouseover="this.style.boxShadow='6px 6px 0px #3b4cca'; this.style.transform='translateY(-4px)'; this.style.background='#fff'; this.querySelector('.team-real-img').style.opacity='1';"
             onmouseout="this.style.boxShadow='none'; this.style.transform='none'; this.style.background='transparent'; this.querySelector('.team-real-img').style.opacity='0';">
          
          <!-- Contenedor de Imagen de Doble Capa (Fondo Inicial Silueta -> Capa Superior Imagen) -->
          <div style="border: 2px solid #000; background: #3b4cca; height: 100px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
            <!-- Capa A: Silueta inicial / Inicial tipográfica -->
            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 2.2rem; color: #fff; font-weight: bold; position: absolute; z-index: 1;">E_</span>
            <!-- Capa B: Imagen Real superpuesta (Controlada dinámicamente con opacidad elástica por JS en el hover) -->
            <img class="team-real-img" src="https://picsum.photos/100/100?random=1" alt="Emmanuel" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 2; opacity: 0; transition: opacity 0.3s ease-in-out;" />
          </div>
          
          <div>
            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; background: #000; color: #fff; padding: 2px 6px; font-weight: bold; text-transform: uppercase;">CEO & Strategist</span>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.6rem; text-transform: uppercase; margin: 6px 0 4px 0;">Emmanuel</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.88rem; line-height: 1.5; color: #333; margin: 0;">
              Lidera la visión de ShadowTech bajo alta eficiencia. Diseña con precisión cada fase de los despliegues, priorizando la cohesión del grupo.
            </p>
          </div>
        </div>

        <!-- Ficha 02: Héctor -->
        <div class="animate-qs-member" style="border: 2px solid #000; padding: 20px; display: grid; grid-template-columns: 100px 1fr; gap: 20px; background: transparent; opacity: 0; transform: translateY(30px); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);"
             onmouseover="this.style.boxShadow='6px 6px 0px #3b4cca'; this.style.transform='translateY(-4px)'; this.style.background='#fff'; this.querySelector('.team-real-img').style.opacity='1';"
             onmouseout="this.style.boxShadow='none'; this.style.transform='none'; this.style.background='transparent'; this.querySelector('.team-real-img').style.opacity='0';">
          
          <div style="border: 2px solid #000; background: #000; height: 100px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 2.2rem; color: #fff; font-weight: bold; position: absolute; z-index: 1;">H_</span>
            <img class="team-real-img" src="https://picsum.photos/100/100?random=2" alt="Héctor" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 2; opacity: 0; transition: opacity 0.3s ease-in-out;" />
          </div>
          <div>
            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; background: #3b4cca; color: #fff; padding: 2px 6px; font-weight: bold; text-transform: uppercase;">CTO & Lead Developer</span>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.6rem; text-transform: uppercase; margin: 6px 0 4px 0;">Héctor</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.88rem; line-height: 1.5; color: #333; margin: 0;">
              Coordina la arquitectura tecnológica. Domina herramientas de vanguardia con un enfoque analítico neutral y altamente proactivo.
            </p>
          </div>
        </div>

        <!-- Ficha 03: Axel -->
        <div class="animate-qs-member" style="border: 2px solid #000; padding: 20px; display: grid; grid-template-columns: 100px 1fr; gap: 20px; background: transparent; opacity: 0; transform: translateY(30px); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);"
             onmouseover="this.style.boxShadow='6px 6px 0px #3b4cca'; this.style.transform='translateY(-4px)'; this.style.background='#fff'; this.querySelector('.team-real-img').style.opacity='1';"
             onmouseout="this.style.boxShadow='none'; this.style.transform='none'; this.style.background='transparent'; this.querySelector('.team-real-img').style.opacity='0';">
          
          <div style="border: 2px solid #000; background: #3b4cca; height: 100px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 2.2rem; color: #fff; font-weight: bold; position: absolute; z-index: 1;">A_</span>
            <img class="team-real-img" src="https://picsum.photos/100/100?random=3" alt="Axel" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 2; opacity: 0; transition: opacity 0.3s ease-in-out;" />
          </div>
          <div>
            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; background: #000; color: #fff; padding: 2px 6px; font-weight: bold; text-transform: uppercase;">COO & Strategy Advisor</span>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.6rem; text-transform: uppercase; margin: 6px 0 4px 0;">Axel</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.88rem; line-height: 1.5; color: #333; margin: 0;">
              Garantiza la estabilidad operativa del entorno. Resuelve problemas complejos implementando metodologías inclusivas y de soporte estratégico.
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
`;

export function init() {
  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline();
    
    tl.to(".animate-qs-title", { duration: 0.6, opacity: 1, y: 0, ease: "power3.out" })
      .to(".animate-qs-card", { duration: 0.6, opacity: 1, y: 0, stagger: 0.15, ease: "back.out(1.4)" }, "-=0.2")
      .to(".animate-qs-desc", { duration: 0.6, opacity: 1, y: 0, ease: "power3.out" }, "-=0.3")
      .to(".animate-qs-history", { duration: 0.7, opacity: 1, ease: "power2.out" }, "-=0.3")
      .to(".animate-qs-team-title", { duration: 0.5, opacity: 1, y: 0, ease: "power2.out" }, "-=0.3")
      .to(".animate-qs-member", { 
        duration: 0.6, 
        opacity: 1, 
        y: 0, 
        stagger: 0.15, 
        ease: "back.out(1.2)" 
      }, "-=0.2");
  }
}