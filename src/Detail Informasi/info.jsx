import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillBackward } from "react-icons/ai";
import Cookies from "js-cookie";

const Info = (props) => {
  console.log(props);
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [params.id]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-[#FFF2F2] pr-[50px] pl-[50px] pb-[80px] pt-[100px]">
        <h1 className="text-[40px] text-[#778CE0] mb-[20px] font-plusjktsans font-semibold pl-[10px]">{data.company_name}</h1>
        <img src={data.company_image_url} className="h-[300px]" alt="" />
        <div className="flex flex-row justify-start mt-[20px]">
          <div className="w-[100px]">
            <p className="text-[#778CE0] font-plusjktsans w-[200px]">Lokasi</p>
            <p className="text-[#778CE0] font-plusjktsans">Deskripsi</p>
            <br />
            <p className="text-[#778CE0] font-plusjktsans">Qualifikasi</p>
            <br />
            <p className="text-[#778CE0] font-plusjktsans">Job Desk</p>
            <p className="text-[#778CE0] font-plusjktsans w-[200px]">tipe Pekerjaan</p>
            <p className="text-[#778CE0] font-plusjktsans">Gaji</p>
            <p className="text-[#778CE0] font-plusjktsans w-[200px]">Masa Jabatan</p>
          </div>
          <div className="ml-[20px]">
            <div>{data.company_city}</div>
            <div>{data.job_description}</div>
            <div>{data.job_qualification}</div>
            <div>{data.title}</div>
            <div>{data.job_type}</div>
            <div>
              {data.salary_min}jt - {data.salary_max}jt
            </div>
            <div>{data.job_tenure}</div>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="mt-[30px] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleBack}
          >
            <AiFillBackward className="inline mt-[-2.1px] mr-[5px] text-[20px]" />
            Back to home
          </button>
          {Cookies.get("token") && (
            <Link
              type="button"
              class="mt-[30px] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              to="/dashboard"
            >
              <AiFillBackward className="inline mt-[-2.1px] mr-[5px] text-[20px]" />
              Back to Dashboard
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Info;
