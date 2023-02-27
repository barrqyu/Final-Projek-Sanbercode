import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateContent = () => {
  const navigate = useNavigate();
  const [input, SetInput] = useState({
    company_city: "",
    company_name: "",
    company_image_url: "",
    job_description: "",
    job_qualification: "",
    job_status: "",
    job_tenure: "",
    job_type: "",
    salary_max: "",
    salary_min: "",
    title: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "company_name") {
      SetInput({ ...input, company_name: value });
    } else if (name === "company_city") {
      SetInput({ ...input, company_city: value });
    } else if (name === "company_image_url") {
      SetInput({ ...input, company_image_url: value });
    } else if (name === "job_description") {
      SetInput({ ...input, job_description: value });
    } else if (name === "job_qualification") {
      SetInput({ ...input, job_qualification: value });
    } else if (name === "job_status") {
      SetInput({ ...input, job_status: value });
    } else if (name === "job_tenure") {
      SetInput({ ...input, job_tenure: value });
    } else if (name === "job_type") {
      SetInput({ ...input, job_type: value });
    } else if (name === "salary_max") {
      SetInput({ ...input, salary_max: value });
    } else if (name === "salary_min") {
      SetInput({ ...input, salary_min: value });
    } else if (name === "title") {
      SetInput({ ...input, title: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let { company_city, company_name, company_image_url, job_description, job_qualification, job_status, job_tenure, job_type, salary_max, salary_min, title } = input;
    axios
      .post(
        "https://dev-example.sanbercloud.com/api/job-vacancy",
        { company_city, company_name, company_image_url, job_description, job_qualification, job_status, job_tenure, job_type, salary_max, salary_min, title },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => {
        alert(err);
      });

    SetInput({
      company_city: "",
      company_name: "",
      company_image_url: "",
      job_description: "",
      job_qualification: "",
      job_status: "",
      job_tenure: "",
      job_type: "",
      salary_max: "",
      salary_min: "",
      title: "",
    });
  };
  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6 pt-10">
      <div className="px-[50px]">
        <form onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="company_name"
              type="string"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-purple-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.company_name}
              required
              onChange={handleChange}
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nama Perusahaan
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="company_city"
              type="string"
              id="company_city"
              className="block py-2.5 px-0 w-full text-sm text-purple-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.company_city}
              required
              onChange={handleChange}
            />
            <label
              htmlFor="company_city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Lokasi
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="company_image_url"
              type="string"
              id="company_image_url"
              className="block py-2.5 px-0 w-full text-sm text-purple-500  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.company_image_url}
              required
              onChange={handleChange}
            />
            <label
              htmlFor="company_image_url"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image Url
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="job_description"
              type="textarea"
              id="description"
              className="block py-2.5 px-0 w-full text-sm text-purple-500  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.job_description}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Deskripsi
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="job_qualification"
              type="string"
              id="job_qualification"
              className="block py-2.5 px-0 w-full text-sm text-purple-500  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.job_qualification}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="job_qualification"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Qualifikasi
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="salary_min"
              type="number"
              id="salary_min"
              className="block py-2.5 px-0 w-full text-sm text-purple-500  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.salary_min}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="salary_min"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Salary Min
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="salary_max"
              type="number"
              id="salary_max"
              className="block py-2.5 px-0 w-full text-sm text-purple-500  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.salary_max}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="salary_max"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Salary Max
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="title"
              type="text"
              min="1"
              max="5"
              id="title"
              className="block py-2.5 px-0 w-full text-sm text-purple-500  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.title}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="rating"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="job_type"
              id="job_type"
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-purple-500  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.job_type}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="job_type"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              jam kerja
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="job_tenure"
              type="text"
              id="job_tenure"
              className="block py-2.5 px-0 w-full text-sm text-purple-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.job_tenure}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="job_tenure"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Masa Jabatan
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="job_status"
              type="number"
              min="0"
              max="1"
              id="job_status"
              className="block py-2.5 px-0 w-full text-sm text-purple-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.job_status}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="job_status"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tipe pekerjaan
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-00 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateContent;
