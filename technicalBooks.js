console.log("\Technical Books\n");

class TechnicalBooks {
  constructor(title, author, ISBN, numCopies, edition){
    this.title = title,
    this.author = author,
    this.ISBN = ISBN,
    this.numCopies = numCopies,
    this.edition = edition
  }

  getEditions(){
    return `The current edition of this book is ${this.edition}.`
  }
}

const Book1 = new TechnicalBooks(
  "Cracking The Coding Interview", 
  "Gayle Laackmann McDowell", 
  1209123, 
  7, 
  "2.3"
)
console.log(Book1.getEditions())