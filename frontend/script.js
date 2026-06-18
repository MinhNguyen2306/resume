(function () {
  "use strict";

  /* ----------------------------------------
     Mobile nav toggle
  ---------------------------------------- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----------------------------------------
     Theme toggle (light / dark)
     The initial theme is set by an inline script in <head> to avoid
     a flash; here we just handle the button and persist the choice.
  ---------------------------------------- */
  var themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    var syncLabel = function () {
      var isLight = document.documentElement.getAttribute("data-theme") === "light";
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
      );
    };
    syncLabel();

    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("mn_theme", next);
      } catch (e) {}
      syncLabel();
    });
  }

  /* ----------------------------------------
     Reveal-on-scroll
  ---------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ----------------------------------------
     Side rail: build from sections, track active
     (only on pages that have the full main-page section set —
     project detail pages share some ids like #top/#contact but
     shouldn't get a broken partial rail)
  ---------------------------------------- */
  var railSectionDefs = [
    { id: "top", label: "Top" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "blog", label: "Writing" },
    { id: "contact", label: "Contact" }
  ];

  var railSections = railSectionDefs.filter(function (s) {
    return document.getElementById(s.id) !== null;
  });

  var isFullMainPage = railSections.length === railSectionDefs.length;

  if (isFullMainPage) {
    var rail = document.createElement("nav");
    rail.className = "side-rail";
    rail.setAttribute("aria-label", "Section navigation");

    var railItems = railSections.map(function (section) {
      var item = document.createElement("a");
      item.className = "side-rail-item";
      item.href = "#" + section.id;

      var label = document.createElement("span");
      label.className = "side-rail-label";
      label.textContent = section.label;

      var dash = document.createElement("span");
      dash.className = "side-rail-dash";
      dash.setAttribute("aria-hidden", "true");

      item.appendChild(label);
      item.appendChild(dash);
      item.setAttribute("data-target", section.id);

      // The "top" section is a sticky header (position: sticky; top: 0),
      // so it's already pinned at the viewport top and a plain anchor
      // jump won't visibly scroll the page. Force an explicit scroll
      // to the very top of the document instead.
      if (section.id === "top") {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          history.replaceState(null, "", "#top");
        });
      }

      rail.appendChild(item);
      return item;
    });

    document.body.appendChild(rail);

    var targetEls = railSections.map(function (s) {
      return document.getElementById(s.id);
    });

    function setActive(id) {
      railItems.forEach(function (item) {
        item.classList.toggle("is-active", item.getAttribute("data-target") === id);
      });
    }

    if ("IntersectionObserver" in window) {
      var visibleRatios = {};

      var railObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            visibleRatios[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
          });

          var bestId = null;
          var bestRatio = 0;
          Object.keys(visibleRatios).forEach(function (id) {
            if (visibleRatios[id] > bestRatio) {
              bestRatio = visibleRatios[id];
              bestId = id;
            }
          });

          if (bestId) setActive(bestId);
        },
        { threshold: [0.1, 0.25, 0.5, 0.75, 1] }
      );

      targetEls.forEach(function (el) {
        railObserver.observe(el);
      });
    }

    setActive(railSections[0].id);
  }

  /* ----------------------------------------
     Hero particle network
     Two clusters (gray + accent) drifting and linking to nearby
     same-cluster points, split by a dashed boundary curve.
     Pauses when offscreen; static if reduced-motion is preferred.
  ---------------------------------------- */
  var heroCanvas = document.getElementById("heroCanvas");
  if (heroCanvas && heroCanvas.getContext) {
    var pctx = heroCanvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var cssVal = function (name, fallback) {
      var v = getComputedStyle(document.documentElement).getPropertyValue(name);
      return (v && v.trim()) || fallback;
    };
    var pW = 0, pH = 0, particles = [];
    var LINK = 80;
    var reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var buildParticles = function () {
      particles = [];
      var n = pW < 360 ? 14 : 18;
      for (var i = 0; i < n; i++) {
        var cluster = i < n / 2 ? 0 : 1;
        var x, y;
        if (cluster === 0) {
          x = Math.random() * pW * 0.42;
          y = Math.random() * pH * 0.5;
        } else {
          x = pW * 0.55 + Math.random() * pW * 0.42;
          y = pH * 0.45 + Math.random() * pH * 0.5;
        }
        particles.push({
          x: x, y: y,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 2 + Math.random() * 2.5,
          c: cluster
        });
      }
    };

    var resizeCanvas = function () {
      var rect = heroCanvas.getBoundingClientRect();
      pW = rect.width;
      pH = rect.height;
      heroCanvas.width = pW * dpr;
      heroCanvas.height = pH * dpr;
      pctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    var draw = function () {
      var dotA = cssVal("--ink-dim", "#9aa3b5");
      var accent = cssVal("--accent", "#4d9fff");
      var boundary = cssVal("--ink-faint", "#5a6376");

      pctx.clearRect(0, 0, pW, pH);

      pctx.save();
      pctx.strokeStyle = boundary;
      pctx.globalAlpha = 0.5;
      pctx.lineWidth = 1;
      pctx.setLineDash([4, 6]);
      pctx.beginPath();
      pctx.moveTo(pW * 0.08, pH * 0.92);
      pctx.bezierCurveTo(pW * 0.35, pH * 0.7, pW * 0.5, pH * 0.35, pW * 0.95, pH * 0.08);
      pctx.stroke();
      pctx.restore();

      var i, j;
      if (!reduceMotion) {
        for (i = 0; i < particles.length; i++) {
          var p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > pW) p.vx *= -1;
          if (p.y < 0 || p.y > pH) p.vy *= -1;
        }
      }

      for (i = 0; i < particles.length; i++) {
        for (j = i + 1; j < particles.length; j++) {
          var a = particles[i], b = particles[j];
          if (a.c !== b.c) continue;
          var dx = a.x - b.x, dy = a.y - b.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            pctx.strokeStyle = accent;
            pctx.globalAlpha = (1 - d / LINK) * 0.45;
            pctx.lineWidth = 0.6;
            pctx.beginPath();
            pctx.moveTo(a.x, a.y);
            pctx.lineTo(b.x, b.y);
            pctx.stroke();
          }
        }
      }

      pctx.globalAlpha = 1;
      for (i = 0; i < particles.length; i++) {
        var pt = particles[i];
        pctx.beginPath();
        pctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        pctx.fillStyle = pt.c === 0 ? dotA : accent;
        pctx.fill();
      }
    };

    var rafId = null;
    var running = false;
    var loop = function () {
      draw();
      rafId = requestAnimationFrame(loop);
    };
    var start = function () {
      if (running || reduceMotion) return;
      running = true;
      loop();
    };
    var stop = function () {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    };

    resizeCanvas();
    draw();

    var rzTimer;
    window.addEventListener("resize", function () {
      clearTimeout(rzTimer);
      rzTimer = setTimeout(resizeCanvas, 200);
    });

    if (reduceMotion) {
      draw();
    } else if ("IntersectionObserver" in window) {
      var heroObs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) start();
            else stop();
          });
        },
        { threshold: 0.05 }
      );
      heroObs.observe(heroCanvas);
    } else {
      start();
    }
  }

  /* ----------------------------------------
     Visitor count (local, session-based placeholder)
  ---------------------------------------- */
  var visitorCountEl = document.getElementById("visitorCount");
  if (visitorCountEl) {
    var count = 1;
    try {
      var stored = sessionStorage.getItem("mn_visitor_count");
      count = stored ? parseInt(stored, 10) + 1 : Math.floor(Math.random() * 50) + 120;
      sessionStorage.setItem("mn_visitor_count", String(count));
    } catch (e) {
      count = Math.floor(Math.random() * 50) + 120;
    }
    visitorCountEl.textContent = count;
  }
})();