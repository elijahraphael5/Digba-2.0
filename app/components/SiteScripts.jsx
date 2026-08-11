"use client";

import { useEffect } from "react";

export default function SiteScripts() {
  useEffect(() => {
    // ---------------------------------------------------------------
    // Mobile nav toggle
    // ---------------------------------------------------------------
    const hamburger = document.getElementById("hamburger");
    const closeBtn = document.getElementById("close");
    const navLinks = document.querySelector("#nav-links");

    function openNav() {
      navLinks.classList.add("active");
      hamburger.style.display = "none";
      closeBtn.style.display = "block";
    }
    function closeNav() {
      navLinks.classList.remove("active");
      hamburger.style.display = "block";
      closeBtn.style.display = "none";
    }

    if (hamburger && closeBtn && navLinks) {
      hamburger.addEventListener("click", openNav);
      closeBtn.addEventListener("click", closeNav);
    }

    // ---------------------------------------------------------------
    // New York time clock (events page)
    // ---------------------------------------------------------------
    function updateNewYorkTime() {
      const el = document.getElementById("dateDisplay");
      if (!el) return;
      const date = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      el.textContent = formatter.format(date).replace(",", "");
    }
    updateNewYorkTime();
    const clockInterval = setInterval(updateNewYorkTime, 1000);

    // ---------------------------------------------------------------
    // Highlight today's event on the events page
    // ---------------------------------------------------------------
    function highlightTodayEvent() {
      const eventElements = document.querySelectorAll(".eventdetails");
      const today = new Date();
      const nowNY = new Date(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(today)
      );

      eventElements.forEach((el) => {
        const h1 = el.querySelector("h1");
        if (!h1) return;
        const dateText = h1.textContent.trim();
        const [monthName, day] = dateText.split(" ");
        const eventDate = new Date(`${monthName} ${day}, ${nowNY.getFullYear()}`);
        if (
          eventDate.getDate() === nowNY.getDate() &&
          eventDate.getMonth() === nowNY.getMonth()
        ) {
          el.classList.add("highlight");
        }
      });
    }
    highlightTodayEvent();

    // ---------------------------------------------------------------
    // Home page image swap + music page album switching
    // ---------------------------------------------------------------
    function dolike(target) {
      const imagechange = document.querySelector("#defaultImage");
      if (imagechange) {
        imagechange.setAttribute("src", target);
      }

      const album = document.querySelector(".albumPreview");
      const album1 = document.getElementById("album1");
      const album2 = document.getElementById("album2");
      const album3 = document.getElementById("album3");
      const album4 = document.getElementById("album4");
      if (!album || !album1 || !album2 || !album3 || !album4) return;

      album.style.display = "block";
      album1.style.display = "none";
      album2.style.display = "none";
      album3.style.display = "none";
      album4.style.display = "none";

      if (target === "album67") album1.style.display = "flex";
      else if (target === "albumyu") album2.style.display = "flex";
      else if (target === "album77") album3.style.display = "flex";
      else album4.style.display = "flex";
    }

    const albumButtons = document.querySelectorAll(".album");
    albumButtons.forEach((a) =>
      a.addEventListener("click", () =>
        dolike(a.getAttribute("data-album") || "album99")
      )
    );
    if (document.querySelector(".albumPreview")) dolike("album99");

    // ---------------------------------------------------------------
    // Gallery horizontal scroll (gallery page only)
    // ---------------------------------------------------------------
    let killGallery;
    if (document.getElementById("portfolio")) {
      (async () => {
        const gsap = (await import("gsap")).gsap;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
        const ScrollSmoother = (await import("gsap/ScrollSmoother"))
          .ScrollSmoother;

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        const smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2,
          normalizeScroll: true,
          ignoreMobileResize: true,
          preventDefault: true,
        });

        const triggers = gsap.utils.toArray("#portfolio").map((sec) => {
          const pinWrap = sec.querySelector(".horiz-gallery-strip");

          let horizontalScrollLength;
          function refresh() {
            horizontalScrollLength = pinWrap.scrollWidth - window.innerWidth;
          }
          refresh();

          ScrollTrigger.addEventListener("refreshInit", refresh);

          return gsap.to(pinWrap, {
            scrollTrigger: {
              trigger: sec,
              pin: sec,
              scrub: true,
              start: "top top",
              end: () => `+=${horizontalScrollLength}`,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
            x: () => -horizontalScrollLength,
            ease: "none",
          });
        });

        killGallery = () => {
          triggers.forEach((t) => t.kill());
          smoother.kill();
        };
      })();
    }

    return () => {
      if (hamburger && closeBtn && navLinks) {
        hamburger.removeEventListener("click", openNav);
        closeBtn.removeEventListener("click", closeNav);
      }
      clearInterval(clockInterval);
      if (killGallery) killGallery();
    };
  }, []);

  return null;
}