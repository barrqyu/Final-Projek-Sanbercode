import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";

const Pagination = () => {
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
    <div className="btn-group mt-[20px]">
      {prev !== null && (
        <Link href={prev} className="btn bg-purple-500 text-white text-xl  hover:text-purple-500 hover:bg-white">
          <TbPlayerTrackPrev />
        </Link>
      )}
      <button className="btn bg-purple-500 text-white text-xl  hover:text-purple-500 hover:bg-white">{current}</button>

      {next !== null && (
        <Link href={next} className="btn bg-purple-500 text-white text-xl  hover:text-purple-500 hover:bg-white">
          <TbPlayerTrackNext />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
