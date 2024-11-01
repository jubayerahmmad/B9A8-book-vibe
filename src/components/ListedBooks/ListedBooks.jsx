import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utilities/addToLS";
import MarkedRead from "./MarkedRead";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");

  const books = useLoaderData();

  // useEffect for readlist
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListId = storedReadList.map((id) => parseInt(id));

    const readBooks = books.filter((book) =>
      storedReadListId.includes(book.bookId)
    );

    setReadList(readBooks);
  }, [books]);

  // useEffect for wish list
  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListId = storedWishList.map((id) => parseInt(id));

    const wishListBooks = books.filter((book) =>
      storedWishListId.includes(book.bookId)
    );

    setWishList(wishListBooks);
  }, [books]);

  //handling sort
  const handleSort = (sort) => {
    setSort(sort);
    if (sort === "Rating") {
      const sortedReadList = [...readList].sort((a, b) => b.rating - a.rating);
      const sortedWishList = [...wishList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedReadList);
      setWishList(sortedWishList);
    }
    if (sort === "Pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      const sortedWishList = [...wishList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadList(sortedReadList);
      setWishList(sortedWishList);
    }
  };

  return (
    <div>
      <div className="dropdown dropdown-bottom flex justify-center">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-green-500 text-white m-1"
        >
          {sort ? `Sort by ${sort}` : "Sort By"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort("Rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSort("Pages")}>
            <a>Pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="my-6 p-3">
            {readList.map((readBook, i) => (
              <MarkedRead key={i} readBook={readBook}></MarkedRead>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>
            {" "}
            <div className="my-6 p-3">
              {wishList.map((readBook, i) => (
                <MarkedRead key={i} readBook={readBook}></MarkedRead>
              ))}
            </div>
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
