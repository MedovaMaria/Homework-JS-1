let books = new Map();
books.set("book 1", "shelf 11");
books.set("book 2", "shelf 12");
books.set("book 3", "shelf 13");
books.set("book 4", "shelf 14");
books.set("book 5", "shelf 15");
books.set("book 6", "shelf 16");
books.set("book 7", "shelf 17");

for (let book of books.keys()){
  
    console.log(`${book} in ${books.get(book)}`);
  
}