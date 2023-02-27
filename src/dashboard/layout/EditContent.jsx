import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditContent = (props) => {
  console.log(props);
  const [data, setData] = useState({
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
  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "company_name") {
      setData({ ...data, company_name: value });
    } else if (name === "company_city") {
      setData({ ...data, company_city: value });
    } else if (name === "company_image_url") {
      setData({ ...data, company_image_url: value });
    } else if (name === "job_description") {
      setData({ ...data, job_description: value });
    } else if (name === "job_qualification") {
      setData({ ...data, job_qualification: value });
    } else if (name === "job_status") {
      setData({ ...data, job_status: value });
    } else if (name === "job_tenure") {
      setData({ ...data, job_tenure: value });
    } else if (name === "job_type") {
      setData({ ...data, job_type: value });
    } else if (name === "salary_max") {
      setData({ ...data, salary_max: value });
    } else if (name === "salary_min") {
      setData({ ...data, salary_min: value });
    } else if (name === "title") {
      setData({ ...data, title: value });
    }
  };

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${params.id}`)
      .then((res) => {
        console.log("kuy", res.data);
        let result = res.data;
        setData(res.data);

        setData({
          company_city: result.company_city,
          company_name: result.company_name,
          company_image_url: result.company_image_url,
          job_description: result.job_description,
          job_qualification: result.job_qualification,
          job_status: result.job_status,
          job_tenure: result.job_tenure,
          job_type: result.job_type,
          salary_max: result.salary_max,
          salary_min: result.salary_min,
          title: result.title,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let { company_city, company_name, company_image_url, job_description, job_qualification, job_status, job_tenure, job_type, salary_max, salary_min, title } = data;
    axios
      .put(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${params.id}`,
        { company_city, company_name, company_image_url, job_description, job_qualification, job_status, job_tenure, job_type, salary_max, salary_min, title },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then((res) => {
        navigate("/dashboard");
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
              value={data.company_name}
              required
              onChange={handleChange}
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="company_city"
              type="string"
              id="company_city"
              className="block py-2.5 px-0 w-full text-sm text-purple-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={data.company_city}
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
              value={data.company_image_url}
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
              name="description"
              type="textarea"
              id="description"
              className="block py-2.5 px-0 w-full text-sm text-purple-500  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={data.job_description}
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
              value={data.job_qualification}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="job_qualification"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="salary_min"
              type="string"
              id="salary_min"
              className="block py-2.5 px-0 w-full text-sm text-purple-500  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={data.salary_min}
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
              value={data.salary_max}
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
              value={data.title}
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
              value={data.job_type}
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
              value={data.job_tenure}
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

export default EditContent;
