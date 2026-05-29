export function init() {
  const routes = {
    home: () => import('./pages/home.js'),
    blog: () => import('./pages/blog.js'),
    'quienes-somos': () => import('./pages/quienes-somos.js'),
    videoej: () => import('./pages/videoej.js'),
    contacto: () => import('./pages/contacto.js'),
    funcionalidad: () => import('./pages/funcionalidad.js'),
  }

  const validRoutes = Object.keys(routes)

  const svgEl = document.querySelector(".transition-svg svg")
  const paths = Array.from(svgEl.querySelectorAll("path"))

  paths.forEach((path) => {
    const length = path.getTotalLength()
    path.style.strokeDasharray = length
    path.style.strokeDashoffset = length
  })

  function leave() {
    return new Promise((resolve) => {
      const tween = gsap.timeline({ onComplete: resolve })

      paths.forEach((path) => {
        tween.to(path, { strokeDashoffset: 0, attr: { "stroke-width": 700 }, duration: 1, ease: "power1.inOut" }, 0)
      })
    })
  }

  function enter() {
    return new Promise((resolve) => {
      const tween = gsap.timeline({ onComplete: resolve })

      paths.forEach((path) => {
        const length = path.getTotalLength()
        tween.to(path, {
          strokeDashoffset: -length,
          attr: { "stroke-width": 200 },
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => { gsap.set(path, { strokeDashoffset: length }) },
        }, 0)
      })
    })
  }

  const pageContent = document.getElementById("page-content")
  let isTransitioning = false
  let currentRoute = getRouteFromHash()

  function getRouteFromHash() {
    const hash = window.location.hash.replace("#", "")
    return validRoutes.includes(hash) ? hash : "home"
  }

  async function renderPage(route) {
    const mod = await routes[route]()
    pageContent.innerHTML = mod.template
  }

  async function navigate(route) {
    if (isTransitioning) return
    if (route === currentRoute) return
    if (!routes[route]) return

    isTransitioning = true

    await leave()
    currentRoute = route
    await renderPage(route)
    if (window.location.hash !== `#${route}`) {
      history.pushState(null, "", `#${route}`)
    }
    await enter()

    isTransitioning = false
  }

  document.querySelectorAll("[data-link]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const route = link.getAttribute("data-link")
      navigate(route)
    })
  })

  window.addEventListener("popstate", () => {
    const route = getRouteFromHash()
    navigate(route)
  })

  renderPage(currentRoute)
}
