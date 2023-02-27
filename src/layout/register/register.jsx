import React, { useState, useEffect } from "react";

import axios from "axios";
import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      alert("Please enter your name.");
    } else if (imageUrl === "") {
      alert("Please enter your profile picture URL.");
    } else if (!imageUrl.match(/\.(jpeg|jpg|gif|png)$/)) {
      alert("Please enter a valid image URL.");
    } else if (email === "") {
      alert("Please enter your email address.");
    } else if (!email.match(/^\S+@\S+\.\S+$/)) {
      alert("Please enter a valid email address.");
    } else if (password === "") {
      alert("Please enter your password.");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
    } else {
      axios
        .post("https://dev-example.sanbercloud.com/api/register", {
          name: name,
          image_url: imageUrl,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          alert("Registration successful!");
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          alert("Registration failed.");
        });
    }
  };

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="login min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold font-poppins text-[#5d75d4]">Register Account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="image_url" className="block text-sm font-medium text-gray-700">
                  Url Image
                </label>
                <div className="mt-1">
                  <input
                    id="image_url"
                    name="image_url"
                    type="url"
                    autoComplete="url"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#778CE0] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
