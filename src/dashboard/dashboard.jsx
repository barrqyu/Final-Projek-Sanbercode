import { Link } from "react-router-dom";

import Aside from "./layout/Aside";
import Content from "./layout/Content";
import Header from "./layout/Header";

const Dashboard = () => {
  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        {/* aside */}
        <Aside />
        {/* end aside */}
        <div className="flex flex-col w-full md:space-y-4">
          {/* header */}
          <Header />
          {/* end header */}
          {/* content */}
          <Content />
          {/* end Content */}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
