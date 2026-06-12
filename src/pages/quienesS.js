/**
 * permitiendo un scroll natural que respeta el flujo general de la aplicación.
 * Esto se inicia con el comando pnpm run dev
 */
export const template = `
  <div class="quienes-somos-container" style="padding: 140px 40px 60px 40px; max-width: 1200px; margin: 0 auto;">
    
    <header class="section-header" style="margin-bottom: 60px;">
      <h1 class="animate-qs-title" style="font-family: 'Space Grotesk', sans-serif; font-size: 4rem; text-transform: uppercase; font-weight: 700; line-height: 1; opacity: 0; transform: translateY(40px);">
        CONOCE AL <br><span style="color: #3b4cca;">EQUIPO SHADOW</span>
      </h1>
      <p class="animate-qs-desc" style="font-family: 'Inter', sans-serif; font-size: 1.2rem; margin-top: 20px; max-width: 600px; opacity: 0; transform: translateY(20px);">
        Somos un colectivo de mentes creativas enfocadas en romper el molde digital a través de código sólido y diseño intuitivo.
      </p>
    </header>

    <section class="team-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-bottom: 60px;">
      
      <div class="animate-qs-card" style="border: 2px solid #000; padding: 24px; background: transparent; opacity: 0; transform: translateY(30px);">
        <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.8rem; text-transform: uppercase;">Misión</h3>
        <p style="font-family: 'Inter', sans-serif; margin-top: 12px; color: #333;">
          Impulsar negocios locales mediante el desarrollo de interfaces de alta fidelidad que automaticen y optimicen cada operación.
        </p>
      </div>

      <div class="animate-qs-card" style="border: 2px solid #000; padding: 24px; background: transparent; opacity: 0; transform: translateY(30px);">
        <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.8rem; text-transform: uppercase;">Visión</h3>
        <p style="font-family: 'Inter', sans-serif; margin-top: 12px; color: #333;">
          Consolidarnos como el referente tecnológico de diseño interactivo y disruptivo en nuestra región.
        </p>
      </div>

    </section>

    <section class="animate-qs-history" style="border-top: 2px solid #000; padding-top: 60px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; opacity: 0;">
      
      <div class="history-text">
        <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 2.5rem; text-transform: uppercase; margin-bottom: 20px;">
          Nuestra Historia
        </h2>
        <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; line-height: 1.6; color: #222; margin-bottom: 15px;">
          Nacimos bajo el concepto de "ShadowTech" como respuesta a un panorama digital saturado de plantillas genéricas. Lo que comenzó como un proyecto de aula se transformó en un laboratorio de desarrollo enfocado en la usabilidad pura.
        </p>
        <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; line-height: 1.6; color: #222;">
          Creemos firmemente que el software no solo debe ser funcional, sino también una experiencia memorable. Cada línea de código que escribimos está pensada para mitigar el estrés operativo y potenciar la identidad de nuestros clientes.
        </p>
      </div>
      
      <div class="interactive-box" style="border: 2px solid #000; background: #3b4cca; display: flex; align-items: center; justify-content: center; padding: 40px; min-height: 250px; transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer;"
           onmouseover="this.style.transform='translate(-8px, -8px)'; this.style.boxShadow='8px 8px 0px #000';"
           onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
        <span style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; color: #fff; font-weight: bold; text-align: center; text-transform: uppercase;">
          [ Mueve el cursor aquí para descubrir más ]
        </span>
      </div>
    </section>

  </div>
`;

/**
 * FUNCIÓN: init
 * Inicializa las animaciones de GSAP en cascada cuando el componente se monta en el DOM.
 */
export function init() {
  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline();
    
    tl.to(".animate-qs-title", { duration: 0.6, opacity: 1, y: 0, ease: "power3.out" })
      .to(".animate-qs-desc", { duration: 0.5, opacity: 1, y: 0, ease: "power3.out" }, "-=0.3")
      .to(".animate-qs-card", { duration: 0.6, opacity: 1, y: 0, stagger: 0.15, ease: "back.out(1.5)" }, "-=0.2")
      .to(".animate-qs-history", { duration: 0.7, opacity: 1, ease: "power2.out" }, "-=0.2");
  }
}