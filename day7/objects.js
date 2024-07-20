// *-*-*-*-* Task 1 *-*-*-*-*
// Define a book object with title, author, and year properties
let book = {
    title: "Twilight Saga",
    author: "Stephenie Meyer",
    year: "2005-2016",
  
    // *-*-*-*-* Task 3 *-*-*-*-*
    // Method to get the title and author of the book
    getBookTitleAuthor: function () {
      return `${this.title} written by ${this.author}`;
    },
  
    // *-*-*-*-* Task 4 *-*-*-*-*
    // Method to update the year and return the new value
    getYear: function (year) {
      this.year = year; // Update the year property
      return this.year; // Return the updated year
    },
  };
  
  // ----- Task 1 -> Output -----
  // Log the entire book object
  console.log(book);
  
  // *-*-*-*-* Task 2 *-*-*-*-*
  // Log a formatted string using properties of the book object
  console.log(
    `New York Bestseller ${book.title} written by ${book.author}`
  );
  
  // ----- Task 3 -> Output -----
  // Log the result of getBookTitleAuthor method of the book object
  console.log(book.getBookTitleAuthor());
  
  // ----- Task 4 -> Output -----
  // Log the result of getYear method with a new year value
  console.log(book.getYear(2005));
  
  // *-*-*-*-* Task 5 *-*-*-*-*
  // Define a library object with a name and an array of books
  let library = {
    name: "Admont Abbey Library",
    books: [
      { title: "Twilight", year: "2005-2016" },
      { title: "Harry Potter", year: "1997-2007" },
      { title: "50 Shades of Gray", year: "2011-2012" },
      { title: "Chronicles", year: "2004" },
      { title: "The God Delusion", year: "2006" },
    ],
  
    // *-*-*-*-* Task 7 *-*-*-*-*
    // Method to get a list of book details
    getBooksDetails: function () {
      return this.books.map(
        (book) => `The book: ${book.title}, Published on: ${book.year}`
      );
    },
  };
  
  // ----- Task 5 -> Output -----
  // Log the entire library object
  console.log(library);
  
  
  // *-*-*-*-* Task 6 *-*-*-*-*
  // Define another version of the accessLibrary function
  function accessLibrary() {
    const lib = library.name; // Access the library name
    let book = []; // Initialize an empty array to store book titles
  
    // Use forEach to iterate over the books array and add titles to the book array
    library.books.forEach((item) => {
      const books = item.title; // Access the title of each book
      book.push(books); // Add the title to the book array
    });
  
    // Log a formatted string with the library name and book titles
    console.log(
      `In ${lib} you can find plenty of books like ${book.join(", ")}`
    );
  }
  // ----- Task 6 -> Output -----
  // Call the accessLibrary function
  accessLibrary();
  
  // ----- Task 7 -> Output -----
  // Log the details of all books using the getBooksDetails method of the library object
  console.log(library.getBooksDetails());
  
  // *-*-*-*-* Task 8 *-*-*-*-*
  // Use for...in loop to iterate over the indices of the books array
  for (const index in library.books) {
    const book = library.books[index]; // Access the book object at the current index
  
    // ----- Task 8 -> Output -----
    // Log the title and publication year of the book
    console.log(
      `Title: ${book.title}, Year(s) Published: ${book.year}`
    );
  }
  
  // *-*-*-*-* Task 9 *-*-*-*-*
  // Define a function to get and log key-value pairs of book properties
  function getKeyValuePair() {
    const keyValuePair = library.books.map((book) => {
      const key = Object.keys(book); // Get the keys of the book object
      const value = Object.values(book); // Get the values of the book object
  
      return { key, value }; // Return an object with keys and values
    });
  
    console.table(keyValuePair); // Log the key-value pairs in a table format
  }
  
  // ----- Task 9 -> Output -----
  // Call the getKeyValuePair function
  getKeyValuePair();
  