// ===== Config: change these =====
const CONTACT_EMAIL = "hello@azlanlabs.com"; // placeholder — replace with your real address

if (window.lucide) lucide.createIcons();
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  items.forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 70}ms`; io.observe(el); });
} else {
  items.forEach((el) => el.classList.add("in"));
}

// Contact form: opens the visitor's email app with the message filled in.
// (Swap for a fetch() to your Node.js endpoint when the backend is ready.)
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  if (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email) || !d.message.trim()) {
    msg.textContent = "Please add your name, a valid email and a short message.";
    return;
  }
  const subject = encodeURIComponent(`New project: ${d.type}`);
  const body = encodeURIComponent(`Name: ${d.name}\nEmail: ${d.email}\nNeed: ${d.type}\n\n${d.message}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  msg.textContent = "Opening your email app… if nothing happens, write to " + CONTACT_EMAIL;
});
