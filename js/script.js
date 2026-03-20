const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

const savedTheme = localStorage.getItem("portfolio-theme");

function updateThemeIcon() {
  const isDark = body.classList.contains("dark");
  themeIcon.textContent = isDark ? "☾" : "☀";
}

if (savedTheme === "dark") {
  body.classList.add("dark");
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDark = body.classList.contains("dark");
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");

  updateThemeIcon();
});

const imageTriggers = document.querySelectorAll(".image-trigger");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

function openImageModal(imageSrc) {
  modalImage.src = imageSrc;
  imageModal.classList.add("active");
  imageModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  imageModal.classList.remove("active");
  imageModal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
  document.body.style.overflow = "";
}

imageTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const fullImage = trigger.getAttribute("data-full");
    openImageModal(fullImage);
  });
});

closeModal.addEventListener("click", closeImageModal);

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    closeImageModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageModal.classList.contains("active")) {
    closeImageModal();
  }
});