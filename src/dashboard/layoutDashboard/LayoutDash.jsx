import ProfileTop from "../layout/ProfileTop";
import Aside from "../layout/Aside";
import Header from "../layout/Header";

const LayoutDash = (props) => {
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
          <ProfileTop />
          {props.children}
          {/* end Content */}
        </div>
      </div>
    </main>
  );
};

export default LayoutDash;
