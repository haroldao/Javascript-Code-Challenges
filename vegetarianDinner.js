const menu = [
  {
    name: "Eggplant Parmesan",
    isVegetarian: true
  },
  {
    name: "Spaghetti & Meartballs",
    isVegetarian: false
  }
]

const vegetarianMenu = (menu) => {
  const menuNode = document.querySelector("#menu");
  const vegetarianOptions = menu.filter(option => option.isVegetarian == true);

  vegetarianOptions.forEach(option => {
    let dish = document.createElement('li');
    dish.textContent = option.name;
    menuNode.appendChild(dish);
  })
}

vegetarianMenu(menu)