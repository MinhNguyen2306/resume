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
  ---------------------------------------- */
  var railSections = [
    { id: "top", label: "Top" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "blog", label: "Writing" },
    { id: "contact", label: "Contact" }
  ].filter(function (s) {
    return document.getElementById(s.id) !== null;
  });

  if (railSections.length) {
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