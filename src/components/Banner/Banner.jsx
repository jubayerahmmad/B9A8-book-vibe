import books from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col gap-5 lg:flex-row-reverse">
        <img src={books} className="rounded-lg shadow-2xl" />
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-green-500 text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
