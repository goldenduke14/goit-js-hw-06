
const categoriesNumber = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach(item => {
  const categoryTitle = item.querySelector("h2");
  const categoryElements = item.querySelectorAll("li");

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});