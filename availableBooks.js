class Book {
  constructor(title, author, ISBN, numCopies){
    this.title = title,
    this.author = author,
    this.ISBN = ISBN,
    this.numCopies = numCopies;
  }

  getAvailability() {
    if(this.numCopies == 0){
      return "Out Stock";
    }
    else if(this.numCopies < 10){
      return "Low Stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1){
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked;
  }
}

const HungerGames = new Book("HungerGames", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());