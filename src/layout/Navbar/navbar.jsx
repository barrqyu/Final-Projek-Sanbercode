import Cookies from "js-cookie";
import { MdOutlineLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(Cookies.get("user"));

  let navigate = useNavigate();
  return (
    <div className="navbar bg-[#7286D3]">
      <div className="ml-8 flex-1">
        <Link to={"/"}>
          <img src="images/Group 2.png" class="h-6 mr-1 sm:h-12 inline" alt="jobskuy" />
        </Link>
        <div className="flex items-center">
          <p className="inline font-poppins text-xl font-semibold whitespace-nowrap dark:text-white">Jobskuy</p>
        </div>
      </div>
      <div className="flex-none">
        {!Cookies.get("token") && (
          <div>
            <MdOutlineLogin className="inline text-[24px] mr-1 mt-[-10px] text-white" />
            <Link to={"/login"} className="self-center text-xl font-semibold whitespace-nowrap dark:text-white mr-[20px]">
              Login
            </Link>
          </div>
        )}
        {Cookies.get("token") && (
          <div className="flex">
            <div className="dropdown dropdown-start mr-[10px]">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/dashboard/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
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
            <div className="flex justify-center items-center mr-[70px] mr-[20px]">
              <p className="text-white">Haloo, {user.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
