//seccio de blog donde se recopila y se publica información sobre proyectos y soluciones asi como opiniones y artículos de la gente y negocios en general
import imgLoQ from '../assets/loQ.jpeg'
import imgiocQ from '../assets/iocQ.jpeg'
import imgoctQ from '../assets/octQ.jpeg'

export const template = `
    
     <div class="blog-wrapper">
        <main class="blog">
            <header class="blog__sticky-header">
                <div class="blog__article blog__article--header">
                    <h1 class="blog__big-title">Diseño</h1>
                    <nav class="blog__menu blog__menu--rounded blog__menu--small-title">De que hablamos?</nav>
                </div>
                <div class="blog__article blog__page-number">
                    NO. 01
                </div>
            </header>

            <section class="blog__feed">
                <article class="post">
                    <header class="post__header">
                        <h2 class="blog__big-title">Centrado</h2>
                        <time class="blog__menu blog__menu--small-title post__date" datetime="2021-06-12">23.03.2026</time>
                    </header>
                    <div class="post__content">
                        <img class="post__image" src="${imgLoQ}" at="la implementasion de heuristicas en c#">
                        <h3 class="post__title">Caso de estudio: <span>La tienda</span> que dejo el papel por c#</h3>
                        <div class="post__detail">
                            <span class="post__author">Por Hector Mendoza</span>
                            <span class="post__read-time">5 Min Lectura</span>
                        </div>
                        <p class="post__excerpt">Analizamos cómo la implementación de interfaces accesibles redujo el estrés operativo en comercios locales, logrando que empleados sin experiencia tecnológica dominen las ventas en tiempo récord.</p>
                        <a href="#" class="post__link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-right" viewBox="0 0 24 24">
                                <path d="M15 10l5 5-5 5" />
                                <path d="M4 4v7a4 4 0 004 4h12" />
                            </svg>
                            Leer Mas
                        </a>
                    </div>
                </article>

                <article class="post">
                    <header class="post__header">
                        <h2 class="blog__big-title">Intuitivo</h2>
                        <time class="blog__menu blog__menu--small-title post__date" datetime="2021-06-12">12.04.2026</time>
                    </header>
                    <div class="post__content">
                        <img class="post__image" src="${imgoctQ}" alt="loQ">
                        <h3 class="post__title">Antes vs Despues: <span>Lo que la gente</span> piensa en Queretaro</h3>
                        <div class="post__detail">
                            <span class="post__author">Por Hector Mendez</span>
                            <span class="post__read-time">3 Min Lectura</span>
                        </div>
                        <p class="post__excerpt">Recopilación de testimonios y métricas de satisfacción reales de usuarios tras migrar del desorden de las hojas de cálculo tradicionales a un sistema con heurísticas aplicadas.</p>
                        <a href="#" class="post__link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-right" viewBox="0 0 24 24">
                                <path d="M15 10l5 5-5 5" />
                                <path d="M4 4v7a4 4 0 004 4h12" />
                            </svg>
                            Leer Mas
                        </a>
                    </div>
                </article>

                <article class="post">
                    <header class="post__header">
                        <h2 class="blog__big-title">Eficiente</h2>
                        <time class="blog__menu blog__menu--small-title post__date" datetime="2021-06-12">03.06.2026</time>
                    </header>
                    <div class="post__content">
                        <img class="post__image" src="${imgiocQ}" alt="errores en las TI">
                        <h3 class="post__title">El costo invisible de los <span>errores</span> en administracion de sistemas</h3>
                        <div class="post__detail">
                            <span class="post__author">Por Roberto Emmanuel </span>
                            <span class="post__read-time">5 Min Read</span>
                        </div>
                        <p class="post__excerpt">Evaluamos cómo la Heurística #5 de Nielsen implementada en nuestro código salvó miles de pesos en pérdidas por sistemas mal diseñados.</p>
                        <a href="#" class="post__link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-right" viewBox="0 0 24 24">
                                <path d="M15 10l5 5-5 5" />
                                <path d="M4 4v7a4 4 0 004 4h12" />
                            </svg>
                            Leer Mas
                        </a>
                    </div>
                </article>
            </section>

            <aside class="blog__sidebar sidebar">
                <div class="sidebar__header">
                    <h2 class="sidebar__title">Otros Articulos</h2>
                    <button class="blog__menu blog__menu--rounded">Ver Todos</button>
                </div>
                <div class="sidebar__content">
                    <div class="sidebar__item">
                        <div class="sidebar__item-meta">
                            <span class="sidebar__item-number">1</span>
                            <time class="post__date" datetime="2021-06-12">02.06.2026</time>
                        </div>
                        <h4 class="sidebar__item-title">¿Por qué tus usuarios odian tu sistema actual?</h4>
                        <p class="sidebar__item-excerpt">El diseño enfocado en la experiencia de usuario no es un lujo, es una necesidad operativa para evitar la fatiga mental de tu personal.</p>
                    </div>
                    <div class="sidebar__item">
                        <div class="sidebar__item-meta">
                            <span class="sidebar__item-number">2</span>
                            <time class="post__date" datetime="2021-06-12">01.06.2026</time>
                        </div>
                        <h4 class="sidebar__item-title">Jakob Nielsen en el código de c#</h4>
                        <p class="sidebar__item-excerpt">Cómo traducir reglas teóricas abstractas de usabilidad en líneas de código funcionales, preventivas y seguras.</p>
                    </div>
                    <div class="sidebar__item">
                        <div class="sidebar__item-meta">
                            <span class="sidebar__item-number">3</span>
                            <time class="post__date" datetime="2021-06-12">25.05.2026</time>
                        </div>
                        <h4 class="sidebar__item-title">Las 8 Reglas de Shneiderman para MiPyMEs.</h4>
                        <p class="sidebar__item-excerpt">Una guía rápida de cómo aplicamos los estándares de oro del software a los pequeños comercios locales de la región.</p>
                    </div>
                    <div class="sidebar__item">
                        <div class="sidebar__item-meta">
                            <span class="sidebar__item-number">4</span>
                            <time class="post__date" datetime="2021-06-12">22.05.2026</time>
                        </div>
                        <h4 class="sidebar__item-title">El poder de los atajos de teclado en el punto de venta.</h4>
                        <p class="sidebar__item-excerpt">Optimizando la eficiencia para usuarios expertos mediante aceleradores de interfaz en horas pico de atención</p>
                    </div>
                    <div class="sidebar__item">
                        <div class="sidebar__item-meta">
                            <span class="sidebar__item-number">5</span>
                            <time class="post__date" datetime="2021-06-12">15.05.2026</time>
                        </div>
                        <h4 class="sidebar__item-title">Detrás de cámaras de Shadow Technologies</h4>
                        <p class="sidebar__item-excerpt">Nuestra visión, valores y filosofía de desarrollo desde la Facultad de Informática de la UAQ.</p>
                    </div>
                    
                    <div class="featured-circle">
                        <h4 class="featured-circle__title">Deja el pasado atras</h4>
                        <p class="featured-circle__subtitle">No compitas con herramientas obsoletas, evoluciona tu negocio. Diseña el futuro con nosotros.</p>
                        <a href="#" class="featured-circle__link">Descubrir</a>
                    </div>
                </div>
            </aside>
        </main>
    </div>
`
