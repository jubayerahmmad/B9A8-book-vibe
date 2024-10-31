import { useEffect, useState } from "react";

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
      <p>{Books.length}</p>
    </div>
  );
};

export default Books;
