const floatingButton = document.getElementById("floatingButton");
const dropdownList = document.getElementById("dropdownList");


floatingButton.addEventListener("click", () => {
  if (dropdownList.style.display === "block") {
    dropdownList.style.display = "none";
  } else {
    const rect = floatingButton.getBoundingClientRect();


    dropdownList.style.top = `${rect.bottom + window.scrollY + 75}px`; 
    dropdownList.style.left = `${rect.right + window.scrollX + 75}px`; 

    dropdownList.style.display = "block";
  }
});