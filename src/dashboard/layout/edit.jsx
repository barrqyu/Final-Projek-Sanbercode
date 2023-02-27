import Aside from "./Aside";
import EditContent from "./EditContent";
import Header from "./Header";

const Edit = () => {
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
          <EditContent />
          {/* end Content */}
        </div>
      </div>
    </main>
  );
};

export default Edit;
