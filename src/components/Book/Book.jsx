import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, category, rating, tags } = book;
  return (
    <div className="border-2 rounded-lg p-6 flex flex-col ">
      <div className="bg-slate-200 p-4 rounded-xl">
        <img className="h-80 rounded-lg mx-auto" src={image} alt="" />
      </div>
      <div className="flex gap-4 my-6">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="text-green-500 px-4 py-2 rounded-full bg-green-100 font-semibold"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="flex-grow">
        <h1 className="text-4xl font-bold my-4">{bookName}</h1>
        <p className="text-xl font-semibold text-gray-500">By: {author}</p>
      </div>
      <div className="divider"></div>
      <div className="flex items-center justify-between text-gray-500 font-semibold">
        <h1>{category}</h1>
        <Link to={`books/${bookId}`}>
          <button className="btn btn-outline btn-success btn-sm rounded-full hover:shadow-xl transition duration-1000 hover:scale-105">
            View Details
          </button>
        </Link>
        <p className="flex items-center gap-4">
          {rating} <FaStar />
        </p>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
    totalPages: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    publisher: PropTypes.string.isRequired,
    yearOfPublishing: PropTypes.number.isRequired,
    bookId: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
