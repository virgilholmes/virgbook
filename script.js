const panels = document.querySelectorAll("[data-panel]");

panels.forEach((panel) => {
  const button = panel.querySelector("button");

  button.addEventListener("click", () => {
    const isCollapsed = panel.classList.toggle("collapsed");
    button.setAttribute("aria-expanded", String(!isCollapsed));
  });
});
