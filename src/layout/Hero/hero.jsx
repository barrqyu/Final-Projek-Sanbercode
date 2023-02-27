import { useState } from "react";

const Hero = () => {
  const [search, setSearch] = useState();
  const handleChangeSearch = (e) => setSearch(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="kuy flex justify-center items-center">
      <div className="w-[350px] md:w-[600px]">
        <div className="flex justify-center h-full">
          <img src="images/Group 2.png" className="mt-[-100px]" alt="jobskuy" />
        </div>
        <form onSubmit={handleSearch}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={search}
              onChange={handleChangeSearch}
              placeholder="Cari Pekerjaanmu disini.."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#8EA7E9] dark:hover:bg-[#7286D3] dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
