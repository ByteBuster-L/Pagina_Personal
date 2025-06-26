gsap.from(".greetings span", {
    opacity: 0,
    y: -200,
    scale: 1.5,
    rotate: gsap.utils.wrap([-30, 30]),
    stagger: 0.08,
    duration: 1.2,
    ease: "bounce.out",
    onComplete: () => {
        document.querySelectorAll('.greetings span').forEach(span => {
            span.classList.add('glow');
        });
    }
});

gsap.from(".description", {
    opacity: 0,
    y: 60,
    duration: 1,
    delay: 1,
    ease: "power3.out"
});

gsap.from(".button", {
    opacity: 0,
    scale: 0.5,
    y: 90,
    duration: 1,
    delay: 1.5,
    ease: "elastic.out(1, 0.6)"
});

gsap.utils.toArray(".botones a").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.08, backgroundColor: "#39c6d6", color: "#111", duration: 0.3 });
    });
    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, backgroundColor: "#0a2be9", color: "#fff", duration: 0.3 });
    });
});

gsap.from("nav", {
    opacity: 0,
    y: -40,
    duration: 1,
    delay: 0.7,
    ease: "power2.out"
});

gsap.from("nav ul li", {
    opacity: 0,
    y: -20,
    stagger: 0.15,
    duration: 0.8,
    delay: 1,
    ease: "power2.out"
});

gsap.utils.toArray("main h2").forEach(h2 => {
    gsap.fromTo(h2,
        { opacity: 0, x: -60 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: h2,
                start: "top 80%",
                toggleActions: "restart none none reset"
            }
        }
    );
});

gsap.utils.toArray("main ul li").forEach(li => {
    gsap.fromTo(li,
        { opacity: 0, x: 40 },
        {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
                trigger: li,
                start: "top 90%",
                toggleActions: "restart none none reset"
            }
        }
    );
});

gsap.utils.toArray("main img").forEach(img => {
    gsap.fromTo(img,
        { opacity: 0, scale: 0.85 },
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: img,
                start: "top 85%",
                toggleActions: "restart none none reset"
            }
        }
    );
});

gsap.utils.toArray("main .projecto").forEach(proj => {
    gsap.fromTo(proj,
        { opacity: 0, y: 60 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: proj,
                start: "top 85%",
                toggleActions: "restart none none reset"
            }
        }
    );
});

gsap.fromTo("main form",
    { opacity: 0, scale: 0.8, y: 60 },
    {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "main form",
            start: "top 85%",
            toggleActions: "restart none none reset"
        }
    }
);

gsap.utils.toArray("main form input:not([type='submit']), main form textarea").forEach(el => {
    gsap.fromTo(el,
        { opacity: 0, x: 40 },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "restart none none reset"
            }
        }
    );
});

gsap.fromTo("main form input[type='submit']",
    { opacity: 0, scale: 0.7 },
    {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: "main form input[type='submit']",
            start: "top 90%",
            toggleActions: "restart none none reset"
        }
    }
);

gsap.from(".seccionPerfil", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".seccionPerfil",
        start: "top 85%",
        toggleActions: "restart none none reset"
    }
});

gsap.from(".codeBlock", {
    opacity: 0,
    x: -60,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".codeBlock",
        start: "top 90%",
        toggleActions: "restart none none reset"
    }
});

gsap.from(".about-text", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".about-text",
        start: "top 90%",
        toggleActions: "restart none none reset"
    }
});

gsap.from(".quote-section", {
    opacity: 0,
    x: 60,
    duration: 1,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".quote-section",
        start: "top 90%",
        toggleActions: "restart none none reset"
    }
});

function mostrarSeccion(id){
    const secciones = document.querySelectorAll('.section');
    const NuevaSeccion = document.getElementById(id);
    let algunaActiva = false;

    secciones.forEach((seccion) => {
        if (seccion.classList.contains('active')) {
            algunaActiva = true;
            gsap.to(seccion, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    seccion.classList.remove('active');
                    seccion.style.display = 'none';
                    NuevaSeccion.style.display = 'block';
                    NuevaSeccion.classList.add('active');
                    gsap.fromTo(NuevaSeccion, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: 0.6
                    });
                }
            });
        }
    });
    if(!algunaActiva){
        NuevaSeccion.style.display = 'block';
        NuevaSeccion.classList.add('active');
        gsap.fromTo(NuevaSeccion, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.6
        });
    }
}

// Animación para la caja general de la demo
gsap.from(".paginaEjemplo", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".paginaEjemplo",
        start: "top 85%",
        toggleActions: "restart none none reset"
    }
});

// Animación escalonada para cada fila de la demo
gsap.utils.toArray(".paginaEjemplo .row").forEach((row, i) => {
    gsap.from(row, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: 0.15 * i,
        ease: "power2.out",
        scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "restart none none reset"
        }
    });
});

// Animación para los títulos dentro de la demo
gsap.utils.toArray(".paginaEjemplo .titulos").forEach((titulo, i) => {
    gsap.from(titulo, {
        opacity: 0,
        scale: 0.7,
        duration: 0.5,
        delay: 0.2 + 0.1 * i,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: titulo,
            start: "top 95%",
            toggleActions: "restart none none reset"
        }
    });
});

gsap.from(".contactoWhatsapp", {
    opacity: 0,
    scale: 0.5,
    y: 60,
    duration: 1,
    ease: "elastic.out(1, 0.6)",
    scrollTrigger: {
        trigger: ".contactoWhatsapp",
        start: "top 90%",
        toggleActions: "restart none none reset"
    }
});
