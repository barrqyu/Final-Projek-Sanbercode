import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    let { email, password } = input;
    // console.log(input);
    if (email === "") {
      alert("masukan email yang benar");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
    } else {
      axios
        .post("https://dev-example.sanbercloud.com/api/login", { email, password })
        .then((res) => {
          let data = res.data;

          let { token, user } = data;
          console.log("hayuu", token);
          console.log("user", user);
          Cookies.set("token", token, { expires: 1 });
          Cookies.set("user", JSON.stringify(user), { expires: 1 });
          navigate("/dashboard");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  return (
    <>
      <div className="min-h-screen login flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto w-auto" src="/images/Group 2.png" alt="Logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold font-poppins text-[#5d75d4]">Sign in to your account</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-[30px]">
          <div className="bg-[#FFF2F2] rounded-md py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={input.email}
                    onChange={handleInput}
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={input.password}
                    onChange={handleInput}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Link to="/register" className="hover:text-primary text-sm">
                    Register Now
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#778CE0] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
