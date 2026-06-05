export function initEyes() {
  const pupils = document.querySelectorAll('.pupil')
  const onMove = (e) => {
    pupils.forEach(pupil => {
      const eye = pupil.closest('.eye')
      if (!eye) return
      const rect = eye.getBoundingClientRect()
      const eyeX = rect.left + rect.width / 2
      const eyeY = rect.top + rect.height / 2
      const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX)
      const maxDist = Math.min(rect.width, rect.height) * 0.2
      const x = Math.cos(angle) * maxDist
      const y = Math.sin(angle) * maxDist
      pupil.style.transform = `translate(${x}px, ${y}px)`
    })
  }
  document.addEventListener('mousemove', onMove)
}

export function init() {
  const routes = {
    home: () => import('./pages/home.js'),
    blog: () => import('./pages/blog.js'),
    'nuestroT': () => import('./pages/nuestroT.js'),
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
    mod.init?.()
    updateActiveLink(route)
  }

  function updateActiveLink(route) {
    document.querySelectorAll("[data-link]").forEach((link) => {
      if (link.getAttribute("data-link") === route) {
        link.classList.add("active")
      } else {
        link.classList.remove("active")
      }
    })
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

/* funcion para el scroll de quienes somos*/

export function initScroll() {
	const container = document.querySelector(".qs");
	const scroller = document.querySelector(".scroller");
	const progressCounter = document.querySelector(".progress-counter h1");
	const progressBar = document.querySelector(".progress-bar");
	const sections = Array.from(scroller.querySelectorAll("section"));

	const smoothFactor = 0.05;
	const touchSensitivity = 2.5;
	const bufferSize = 2;

	let targetScrollX = 0;
	let currentScrollX = 0;
	let isAnimating = false;
	let currentProgressScale = 0;
	let targetProgressScale = 0;
	let lastPercentage = 0;

	let isDown = false;
	let lastTouchX = 0;
	let touchVelocity = 0;
	let lastTouchTime = 0;

	const lerp = (start, end, factor) => start + (end - start) * factor;

	const setupScroll = () => {
		scroller
			.querySelectorAll(".clone-section")
			.forEach((clone) => clone.remove());

		const originalSections = Array.from(
			scroller.querySelectorAll("section:not(.clone-section)")
		);
		const templateSections =
			originalSections.length > 0 ? originalSections : sections;

		let sequenceWidth = 0;
		templateSections.forEach((section) => {
			sequenceWidth += parseFloat(window.getComputedStyle(section).width);
		});

		// Create clones before original sections
		for (let i = -bufferSize; i < 0; i++) {
			templateSections.forEach((section, index) => {
				const clone = section.cloneNode(true);
				clone.classList.add("clone-section");
				clone.setAttribute("data-clone-index", `${i}-${index}`);
				scroller.appendChild(clone);
			});
		}

		// Add original sections if none exist
		if (originalSections.length === 0) {
			templateSections.forEach((section, index) => {
				const clone = section.cloneNode(true);
				clone.setAttribute("data-clone-index", `0-${index}`);
				scroller.appendChild(clone);
			});
		}

		// Create clones after original sections
		for (let i = 1; i <= bufferSize; i++) {
			templateSections.forEach((section, index) => {
				const clone = section.cloneNode(true);
				clone.classList.add("clone-section");
				clone.setAttribute("data-clone-index", `${i}-${index}`);
				scroller.appendChild(clone);
			});
		}

		scroller.style.width = `${sequenceWidth * (1 + bufferSize * 2)}px`;
		targetScrollX = sequenceWidth * bufferSize;
		currentScrollX = targetScrollX;
		scroller.style.transform = `translateX(-${currentScrollX}px)`;

		return sequenceWidth;
	};

	const checkBoundaryAndReset = (sequenceWidth) => {
		if (currentScrollX > sequenceWidth * (bufferSize + 0.5)) {
			targetScrollX -= sequenceWidth;
			currentScrollX -= sequenceWidth;
			scroller.style.transform = `translateX(-${currentScrollX}px)`;
			return true;
		}

		if (currentScrollX < sequenceWidth * (bufferSize - 0.5)) {
			targetScrollX += sequenceWidth;
			currentScrollX += sequenceWidth;
			scroller.style.transform = `translateX(-${currentScrollX}px)`;
			return true;
		}

		return false;
	};

	const updateProgress = (sequenceWidth, forceReset = false) => {
		const basePosition = sequenceWidth * bufferSize;
		const currentPosition = (currentScrollX - basePosition) % sequenceWidth;
		let percentage = (currentPosition / sequenceWidth) * 100;

		if (percentage < 0) {
			percentage = 100 + percentage;
		}

		const isWrapping =
			(lastPercentage > 80 && percentage < 20) ||
			(lastPercentage < 20 && percentage > 80) ||
			forceReset;

		progressCounter.textContent = `${Math.round(percentage)}`;
		targetProgressScale = percentage / 100;

		if (isWrapping) {
			currentProgressScale = targetProgressScale;
			progressBar.style.transform = `scaleX(${currentProgressScale})`;
		}

		lastPercentage = percentage;
	};

	const animate = (sequenceWidth, forceProgressReset = false) => {
		currentScrollX = lerp(currentScrollX, targetScrollX, smoothFactor);
		scroller.style.transform = `translateX(-${currentScrollX}px)`;

		updateProgress(sequenceWidth, forceProgressReset);

		if (!forceProgressReset) {
			currentProgressScale = lerp(
				currentProgressScale,
				targetProgressScale,
				smoothFactor
			);
		}
		progressBar.style.transform = `scaleX(${currentProgressScale})`;

		if (Math.abs(targetScrollX - currentScrollX) > 0.01) {
			requestAnimationFrame(() => animate(sequenceWidth));
		} else {
			isAnimating = false;
		}
	};

	// Initialize
	const sequenceWidth = setupScroll();
	updateProgress(sequenceWidth, true);
	progressBar.style.transform = `scaleX(${currentProgressScale})`;

	// Wheel event
	container.addEventListener(
		"wheel",
		(e) => {
			e.preventDefault();
			targetScrollX += e.deltaY;

			const needsReset = checkBoundaryAndReset(sequenceWidth);

			if (!isAnimating) {
				isAnimating = true;
				requestAnimationFrame(() => animate(sequenceWidth, needsReset));
			}
		},
		{ passive: false }
	);

	// Touch events
	container.addEventListener("touchstart", (e) => {
		isDown = true;
		lastTouchX = e.touches[0].clientX;
		lastTouchTime = Date.now();
		targetScrollX = currentScrollX;
	});

	container.addEventListener("touchmove", (e) => {
		if (!isDown) return;
		e.preventDefault();

		const currentTouchX = e.touches[0].clientX;
		const touchDelta = lastTouchX - currentTouchX;

		targetScrollX += touchDelta * touchSensitivity;

		const currentTime = Date.now();
		const timeDelta = currentTime - lastTouchTime;
		if (timeDelta > 0) {
			touchVelocity = (touchDelta / timeDelta) * 15;
		}
		lastTouchX = currentTouchX;
		lastTouchTime = currentTime;

		const needsReset = checkBoundaryAndReset(sequenceWidth);
		if (!isAnimating) {
			isAnimating = true;
			requestAnimationFrame(() => animate(sequenceWidth, needsReset));
		}
	});

	container.addEventListener("touchend", () => {
		isDown = false;

		if (Math.abs(touchVelocity) > 0.1) {
			targetScrollX += touchVelocity * 20;

			const decayVelocity = () => {
				touchVelocity *= 0.95;

				if (Math.abs(touchVelocity) > 0.1) {
					targetScrollX += touchVelocity;
					const needsReset = checkBoundaryAndReset(sequenceWidth);

					if (needsReset) {
						updateProgress(sequenceWidth, true);
					}

					requestAnimationFrame(decayVelocity);
				}
			};

			requestAnimationFrame(decayVelocity);
		}
	});
}
