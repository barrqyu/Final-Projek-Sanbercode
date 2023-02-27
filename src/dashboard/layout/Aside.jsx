import { MdOutlineWork } from "react-icons/md";
import { Link } from "react-router-dom";
const Aside = () => {
  return (
    <div className="relative hidden h-screen shadow-lg lg:block w-80">
      <div className="h-full bg-white dark:bg-gray-900">
        <div className="flex items-center justify-center pt-6">
          <img src="/images/Group 2.png" className="h-[100px]" alt="" />
        </div>
        <nav className="mt-6">
          <div>
            <Link className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white" to="/dashboard">
              <span className="text-left">
                <MdOutlineWork />
              </span>
              <span className="mx-2 text-md font-normal font-plusjktsans">Jobs List</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Aside;
