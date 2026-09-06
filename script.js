const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 80}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const siteHeader = document.querySelector(".site-header");

const getHeaderOffset = () => {
  if (!siteHeader) {
    return 0;
  }

  const headerRect = siteHeader.getBoundingClientRect();
  const headerStyles = window.getComputedStyle(siteHeader);
  const stickyTop = Number.parseFloat(headerStyles.top) || 0;

  return headerRect.height + stickyTop + 20;
};

const alignHashTarget = (behavior = "auto") => {
  if (!window.location.hash) {
    return;
  }

  const target = document.querySelector(window.location.hash);
  if (!target) {
    return;
  }

  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  const scrollTop = Math.max(targetTop - getHeaderOffset(), 0);

  window.scrollTo({
    top: scrollTop,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : behavior,
  });
};

window.addEventListener("load", () => {
  if (!window.location.hash) {
    return;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => alignHashTarget());
  });
});

window.addEventListener("hashchange", () => {
  alignHashTarget("smooth");
});

const form = document.querySelector(".contact-form");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const button = form.querySelector("button");
  const status = form.querySelector(".form-status");

  if (!button) {
    return;
  }

  const originalLabel = button.textContent;
  const formData = new FormData(form);

  button.textContent = "Sending...";
  button.disabled = true;

  if (status) {
    status.textContent = "";
    status.classList.remove("is-error", "is-success");
  }

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
    });

    const result = await response.json();

    if (!response.ok || result.success !== true) {
      throw new Error(result.message || "Unable to send inquiry.");
    }

    if (status) {
      status.textContent =
        "Inquiry sent successfully. Thank you for reaching out.";
      status.classList.add("is-success");
    }

    form.reset();
  } catch (error) {
    if (status) {
      status.textContent =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      status.classList.add("is-error");
    }
  } finally {
    button.textContent = originalLabel;
    button.disabled = false;
  }
});

const lightbox = document.querySelector("#course-lightbox");
const lightboxFrame = document.querySelector("#course-lightbox-frame");
const lightboxTitle = document.querySelector("#course-lightbox-title");
const projectOpenButtons = document.querySelectorAll(
  "[data-course-src][data-course-title]"
);
const lightboxCloseControls = document.querySelectorAll("[data-lightbox-close]");

const openCourseLightbox = (src, title) => {
  if (!lightbox || !lightboxFrame || !lightboxTitle) {
    return;
  }

  lightboxFrame.src = src;
  lightboxTitle.textContent = title || "Course Preview";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
};

const resetLightboxFrame = () => {
  if (!lightboxFrame) {
    return;
  }

  // Force the embedded course to unload so any active audio stops immediately.
  lightboxFrame.src = "about:blank";
  lightboxFrame.removeAttribute("src");
};

const closeCourseLightbox = () => {
  if (!lightbox || !lightboxFrame) {
    return;
  }

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  resetLightboxFrame();
  document.body.classList.remove("lightbox-open");
};

projectOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const src = button.dataset.courseSrc;
    const title = button.dataset.courseTitle;
    if (!src) {
      return;
    }
    openCourseLightbox(src, title);
  });
});

lightboxCloseControls.forEach((control) => {
  control.addEventListener("click", closeCourseLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("is-open")) {
    closeCourseLightbox();
  }
});
