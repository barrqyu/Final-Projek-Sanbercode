import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import ProfileTop from "./ProfileTop";

const Profiles = () => {
  const user = JSON.parse(Cookies.get("user"));
  console.log("gass", user);

  return (
    <>
      <div className="px-[50px] flex ">
        <div className="mr-5">
          <ul>
            <li className=" font-plusjktsans text-purple-500 text-[20px]">Email</li>
            <li className=" font-plusjktsans text-purple-500 text-[20px]">Nama</li>
          </ul>
        </div>
        <div className="mr-5">
          <ul>
            <li className=" font-plusjktsans text-purple-500 text-[20px]">:</li>
            <li className=" font-plusjktsans text-purple-500 text-[20px]">:</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className=" font-thin text-[20px]">{user.email}</li>
            <li className=" font-thin text-[20px]">{user.name}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profiles;
