console.log("\nFood Truck\n");

foodTruckFestival = (menus) => {
  let flatMenus = menus.flat()
  console.log(flatMenus)

  let combinedMenu = new Set();
  flatMenus.forEach((item) => {
    combinedMenu.add(item)
  })
  console.log(combinedMenu)

  const menuNode = document.querySelector("#combined-menu")
  for(let item of combinedMenu){
    let foodNode = document.createElement("li")
    foodNode.innerText = item
    menuNode.appendChild(foodNode)
  }
}

menus = [["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]]
foodTruckFestival(menus)