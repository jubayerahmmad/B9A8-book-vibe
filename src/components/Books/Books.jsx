import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-12">
      <h2 className="text-4xl text-center font-bold">Books</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6 p-4">
        {Books.map((book, index) => (
          <Book key={index} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
