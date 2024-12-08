document.getElementById("exploreBtn").addEventListener("click", () => {
    window.scrollTo({
      top: document.querySelector(".content").offsetTop,
      behavior: "smooth"
    });
  });
  

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for your message! We'll get back to you soon.");
  });