import { toast } from "react-toastify";

// Add Read List to Local Storage
const getStoredReadList = () => {
  const storedReadList = localStorage.getItem("read-list");
  if (storedReadList) {
    const storedList = JSON.parse(storedReadList);
    return storedList;
  } else {
    return [];
  }
};

const addReadListToLocalStorage = (id) => {
  const storedReadList = getStoredReadList();
  if (storedReadList.includes(id)) {
    toast.error("Already Read");
  } else {
    storedReadList.push(id);
    const storedReadListStr = JSON.stringify(storedReadList);
    localStorage.setItem("read-list", storedReadListStr);
    toast.success("Added to Read List");
  }
};

// Add Wish List to Local Storage

const getStoredWishList = () => {
  const storedWishList = localStorage.getItem("wish-list");
  if (storedWishList) {
    const storedList = JSON.parse(storedWishList);
    return storedList;
  } else {
    return [];
  }
};

const addWishListToLocalStorage = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    toast.error("Already added to wish list");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    toast.success("Successfully added to Wishlist");
  }
};

export {
  addReadListToLocalStorage,
  addWishListToLocalStorage,
  getStoredReadList,
  getStoredWishList,
};
