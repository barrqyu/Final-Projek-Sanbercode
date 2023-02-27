import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";

const PaginationHero = () => {
  const [prev, setPrev] = useState(null);
  const [current, setCurrent] = useState();
  const [next, setNext] = useState(null);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        const current = res.data.current_page;
        const last = res.data.last_page_url;
        const next = res.data.next_page_url;

        console.log(res.data);

        setCurrent(current);
        setPrev(last);
        setNext(next);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="mt-[20px]">
        {prev !== null && (
          <Link href={prev} className="btn bg-[#778CE0] text-white text-xl  hover:text-[#778CE0] hover:bg-white">
            <TbPlayerTrackPrev />
          </Link>
        )}
        <button className=" mx-[10px] btn bg-[#778CE0] text-white text-xl  hover:text-[#778CE0] hover:bg-white">{current}</button>

        {next !== null && (
          <Link href={next} className="btn bg-[#778CE0] text-white text-xl  hover:text-[#778CE0] hover:bg-white">
            <TbPlayerTrackNext />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PaginationHero;
