import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const ProfileTop = () => {
  const user = JSON.parse(Cookies.get("user"));
  console.log("gass", user);
  return (
    <>
      <div className="py-[60px] px-[50px] flex">
        <img src={user.image_url} className="rounded-[50%] h-[150px] mr-10" alt="" />

        <div className="flex flex-col justify-center">
          <p className="text-[40px] font-plusjktsans mb-1 text-purple-500">{user.name}</p>
          <p className=" text-green">🅞 {user.email}</p>
        </div>
      </div>
      <div className="px-[50px] flex ">
        <Link to="/dashboard/profile" className="ml-[30px] text-purple-300 hover:bg-purple-50 hover:bg-transparent hover:rounded-full hover:px-2 px-2 hover:text-purple-500 font-plusjktsans">
          Data Diri
        </Link>
        <Link to="/dashboard/gantipw" className="ml-[30px] text-purple-300 hover:bg-purple-50 hover:bg-transparent hover:rounded-full hover:px-2 px-2 hover:text-purple-500 font-plusjktsans">
          Ganti Password
        </Link>
      </div>
      <hr className="ml-[20px] mr-[50px] border-purple-700" />
    </>
  );
};

export default ProfileTop;
