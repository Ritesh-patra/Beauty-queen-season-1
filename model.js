function shuffleDivs() {
  const container = document.querySelector(".shop-section");
  const divs = Array.from(container.children); // Divs ko array me convert karna
  divs.sort(() => Math.random() - 0.5); // Random order me shuffle karna
  container.innerHTML = ""; // Purane divs ko clear karna
  divs.forEach((div) => container.appendChild(div));
}

  window.onload = shuffleDivs();
