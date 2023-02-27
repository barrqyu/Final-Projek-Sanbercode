import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const Content = () => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        console.log(res.data);
        let result = res.data;
        setData(result.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const sizeText = (teks) => {
    let longtext = teks.substring(0, 55);
    return `${longtext}...`;
  };

  const handleDelete = (event) => {
    let idData = parseInt(event.currentTarget.value);
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        setFetchStatus(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const handleEdit = (event) => {
    let idData = parseInt(event.currentTarget.value);
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
      .then((res) => {
        navigate(`/dashboard/edit/${idData}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInfo = (event) => {
    let idData = parseInt(event.currentTarget.value);
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
      .then((res) => {
        navigate(`/info/${idData}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCreate = (event) => {
    navigate("/dashboard/create");
  };
  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
      <div class="relative overflow-x-auto">
        <button
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={handleCreate}
        >
          ++ Create Data
        </button>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Lokasi
              </th>
              <th scope="col" class="px-6 py-3">
                Deskripsi
              </th>
              <th scope="col" class="px-6 py-3">
                Qualifikasi
              </th>
              <th scope="col" class="px-6 py-3">
                Jabatan
              </th>
              <th scope="col" class="px-6 py-3">
                Pekerjaan
              </th>
              <th scope="col" class="px-6 py-3">
                Gaji
              </th>
              <th scope="col" class="px-6 py-3">
                Masa Jabatan
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((datas, index) => {
                return (
                  <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {datas.company_city}
                    </th>
                    <td class="px-6 py-4">{sizeText(datas.job_description)}</td>
                    <td class="px-6 py-4">{sizeText(datas.job_qualification)}</td>
                    <td class="px-6 py-4">{datas.title}</td>
                    <td class="px-6 py-4">{datas.job_type}</td>
                    <td class="px-6 py-4">
                      {datas.salary_min}jt - {datas.salary_max}jt
                    </td>
                    <td class="px-6 py-4">{datas.job_tenure}</td>
                    <td className="flex flex-row mt-[20px]">
                      <button
                        type="button"
                        className="text-black bg-red-600 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-[7px] mr-2 mb-2 bg-white hover:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        value={datas.id}
                        onClick={handleDelete}
                      >
                        <AiFillDelete />
                      </button>
                      <button
                        type="button"
                        className="text-black bg-yellow-500 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-[7px] mr-2 mb-2 bg-white hover:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        value={datas.id}
                        onClick={handleEdit}
                      >
                        <AiFillEdit />
                      </button>
                      <button
                        type="button"
                        className="text-black bg-indigo-500 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-[7px] mr-2 mb-2 bg-white hover:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        value={datas.id}
                        onClick={handleInfo}
                      >
                        <AiOutlineEye />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default Content;
