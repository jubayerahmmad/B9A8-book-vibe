import { useLoaderData, useParams } from "react-router-dom";
import {
  addReadListToLocalStorage,
  addWishListToLocalStorage,
} from "../../utilities/addToLS";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const books = data.find((book) => book.bookId === id);

  const {
    bookName,
    author,
    tags,
    image,
    category,
    publisher,
    rating,
    review,
    totalPages,
    yearOfPublishing,
  } = books;

  const handleMarkAsRead = (id) => {
    addReadListToLocalStorage(id);
  };

  const handleAddToWishList = (id) => {
    addWishListToLocalStorage(id);
  };

  return (
    <div className="lg:flex items-center gap-6 w-full">
      <div className="lg:w-1/3 rounded-xl">
        <img className="p-6 lg:h-[720px] rounded-xl" src={image} alt="" />
      </div>
      <div className="lg:w-2/3 space-y-3 p-8">
        <div>
          <h1 className="text-4xl font-bold my-4">{bookName}</h1>
          <p className="text-xl font-semibold text-gray-500">By: {author}</p>
        </div>
        <div className="divider"></div>
        <p className="text-gray-500 font-semibold">{category}</p>
        <div className="divider"></div>
        <p>
          <span className="font-bold">Review: </span>
          {review}
        </p>
        <div className="flex items-center gap-8">
          <span className="font-bold">Tag </span>
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
        </div>
        <div className="divider"></div>
        <div className="flex gap-6">
          <div className="flex flex-col text-gray-500 font-bold space-y-3">
            <p>Number of Pages :</p>
            <p>Publisher :</p>
            <p>Year of Publishing :</p>
            <p>Rating :</p>
          </div>
          <div className="flex flex-col space-y-3 font-bold">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn btn-outline"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleAddToWishList(bookId)}
            className="btn bg-teal-400 text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
