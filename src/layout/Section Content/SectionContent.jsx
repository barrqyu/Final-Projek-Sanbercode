import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../dashboard/layout/Pagination";
import PaginationHero from "../pagination/PaginationHero";

const SectionContent = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const sizeText = (teks) => {
    let longtext = teks.substring(0, 55);
    return `${longtext}...`;
  };

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        let result = res.data.data;
        setData(result);
        console.log(result);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const hendleInfo = (event) => {
    // console.log("event", parseInt(event.target.value));
    let idData = parseInt(event.target.value);
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
      .then((res) => {
        navigate(`/info/${idData}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex justify-start my-2 mb-8 ml-4">
        <h1 className="text-[30px] font-plusjktsans font-bold text-[#7286D3]"> List Jobs Offered</h1>
      </div>
      <div className="grid md:grid-cols-3 place-items-center gap-4 md:px-[100px]">
        {data !== null &&
          data.map((data, index) => {
            return (
              <div className="mt-[20px] card w-[350px] h-[450px] bg-[#E5E0FF] shadow-xl" key={index}>
                <figure>
                  <img src={data.company_image_url} className="h-[200px]" alt="Shoes" />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title text-[30px]">
                    {data.company_name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p className="mb-[5px]">{data.title}</p>
                  <p>{sizeText(data.job_qualification)}</p>
                  <div className="flex justify-between mt-[10px]">
                    <div>
                      <button
                        type="button"
                        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        value={data.id}
                        onClick={hendleInfo}
                      >
                        Learn More
                      </button>
                    </div>
                    <div className="card-actions justify-end mt-[10px]">
                      <div className="badge badge-outline">{data.company_city}</div>
                      <div className="badge badge-outline">{data.company_name}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <PaginationHero />
    </div>
  );
};

export default SectionContent;
