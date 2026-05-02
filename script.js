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

const form = document.querySelector(".contact-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  const originalLabel = button.textContent;

  button.textContent = "Inquiry sent";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalLabel;
    button.disabled = false;
    form.reset();
  }, 1800);
});

const lightbox = document.querySelector("#course-lightbox");
const lightboxFrame = document.querySelector("#course-lightbox-frame");
const lightboxTitle = document.querySelector("#course-lightbox-title");
const projectOpenButtons = document.querySelectorAll(".project-open[data-course-src]");
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

const closeCourseLightbox = () => {
  if (!lightbox || !lightboxFrame) {
    return;
  }

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxFrame.src = "";
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
