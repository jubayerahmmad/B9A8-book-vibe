import PropTypes from "prop-types";

const MarkedRead = ({ readBook }) => {
  const {
    bookName,
    author,
    tags,
    image,
    category,
    publisher,
    rating,
    totalPages,
    yearOfPublishing,
  } = readBook;
  return (
    <div className="border-2 rounded-xl lg:flex gap-6 my-8 p-6">
      <div>
        <img className="h-80 w-72 rounded-lg" src={image} alt="" />
      </div>
      <div className="space-y-2 w-full">
        <div>
          <h1 className="text-4xl font-bold my-4">{bookName}</h1>
          <p className="text-xl font-semibold text-gray-500">By: {author}</p>
        </div>
        <div className="lg:flex items-center gap-8">
          <div>
            <span className="font-bold">Tag </span>
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
          <div>
            <span className="text-gray-500 font-bold">
              Year of Publishing :{yearOfPublishing}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-8 text-gray-500 font-semibold">
          <p>Publisher: {publisher}</p>
          <p>Page: {totalPages}</p>
        </div>
        <div className="divider"></div>
        <div className="lg:flex items-center gap-7">
          <span className="px-5 py-2 rounded-full font-semibold bg-green-100 text-green-500">
            Category: {category}
          </span>
          <span className="px-5 py-2 rounded-full font-semibold bg-yellow-100 text-yellow-500 ">
            Rating: {rating}
          </span>

          <button className="btn text-white bg-green-500 rounded-full my-4 lg:my-0">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

MarkedRead.propTypes = {
  readBook: PropTypes.shape({
    bookName: PropTypes.string.isRequired,
    bookId: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
    totalPages: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    publisher: PropTypes.string.isRequired,
    yearOfPublishing: PropTypes.number.isRequired,
  }).isRequired,
};

export default MarkedRead;
