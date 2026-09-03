/* =====================================================================
   AI Society Research Lab — 공통 스크립트
   - 현재 연도 표기
   - 접근성 있는 모바일 내비게이션 토글
   - 스크롤 등장(reveal) 애니메이션
   - 맨 위로(back-to-top) 버튼
   ===================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    /* 연도 자동 갱신 */
    document.querySelectorAll("#year, [data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    /* 모바일 내비게이션 */
    var navToggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav-links");
    if (navToggle && navLinks) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-controls", "primary-nav");
      navLinks.id = navLinks.id || "primary-nav";

      var closeNav = function () {
        navLinks.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      };

      navToggle.addEventListener("click", function () {
        var open = navLinks.classList.toggle("nav-open");
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });

      /* 링크 클릭 또는 ESC 시 닫기 */
      navLinks.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", closeNav);
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeNav();
      });
    }

    /* 스크롤 등장 애니메이션 */
    var reveals = document.querySelectorAll(".reveal");
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reveals.length && "IntersectionObserver" in window && !reduceMotion) {
      var io = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach(function (el) {
        io.observe(el);
      });
    } else {
      /* 폴백: 모두 표시 */
      reveals.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }

    /* 맨 위로 버튼 */
    var toTop = document.querySelector(".to-top");
    if (toTop) {
      var onScroll = function () {
        if (window.scrollY > 500) toTop.classList.add("show");
        else toTop.classList.remove("show");
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      toTop.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: reduceMotion ? "auto" : "smooth",
        });
      });
      onScroll();
    }
  });
})();
