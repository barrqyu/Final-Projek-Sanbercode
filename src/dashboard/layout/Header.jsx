import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Cookies from "js-cookie";

const Header = () => {
  let navigate = useNavigate();

  const user = JSON.parse(Cookies.get("user"));
  console.log("gaa", user);

  return (
    <header className="z-40 flex items-center justify-between w-full h-16 bg-purple-500">
      <div className="block ml-6 lg:hidden">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn m-1 text-purple-500">
            <GiHamburgerMenu />
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link className=" font-plusjktsans">Jobs List</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full mr-[10px]">
        <div className="relative flex items-center justify-end w-full p-1 space-x-4">
          <span className="w-1 h-8 bg-gray-200 rounded-lg" />
          <Link href="#" className="relative block">
            <Link to={"/dashboard/profile"}>
              <img alt="profil" src={user.image_url} className="mx-auto object-cover rounded-full h-10 w-10 " />
            </Link>
          </Link>
          <div className="dropdown dropdown-end text-white">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Haloo, {user.name}
            </label>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <hr />
              <li>
                <p
                  onClick={() => {
                    Cookies.remove("token");
                    navigate("/login");
                  }}
                >
                  Logout
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
