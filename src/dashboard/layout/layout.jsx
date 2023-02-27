import Navbar from "../../layout/Navbar/navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};
export default Layout;
