import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, category, rating, tags } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div className="border-2 rounded-lg p-6 flex flex-col hover:shadow-xl transition duration-1000 hover:scale-105">
        <div>
          <img className="h-80 w-full rounded-lg" src={image} alt="" />
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
        <div className="flex justify-between text-gray-500 font-semibold">
          <h1>{category}</h1>
          <p className="flex items-center gap-4">
            {rating} <FaStar />
          </p>
        </div>
      </div>
    </Link>
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
