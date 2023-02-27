import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GantiPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    console.log("haloo", JSON.parse(Cookies.get("user")));
    let kuy = JSON.parse(Cookies.get("user"));
    let idUser = kuy.id;

    if (newPassword !== confirmPassword) {
      setError("Password baru dan konfirmasi password tidak sama");
      return;
    }
    if (newPassword.length < 8) {
      setError("Password baru harus terdiri dari minimal 8 karakter");
      return;
    }
    if (!/[a-zA-Z]/.test(newPassword) || !/\d/.test(newPassword)) {
      setError("Password baru harus mengandung huruf dan angka");
      return;
    }

    axios
      .put(`https://dev-example.sanbercloud.com/api/change-password/${idUser}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        console.log("iii", res);
        navigate("/dashboard/profile");
        setSuccess();
      });

    // if (oldPassword !== oldPasswordCookie) {
    //   setError("Password lama salah");
    //   return;
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="ml-[20px]">
      {/* <div className="mb-[10px]">
        <label className=" font-plusjktsans text-purple-500 mr-[10px]">Password Lama :</label>
        <input type="password" />
      </div> */}
      <div className="mb-[10px]">
        <label className=" font-plusjktsans text-purple-500 mr-[10px]">Password Baru :</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <div className="mb-[10px]">
        <label className=" font-plusjktsans text-purple-500 mr-[10px]">Konfirmasi Password Baru:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button
        type="submit"
        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Simpan
      </button>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Password berhasil diubah</div>}
    </form>
  );
}

export default GantiPassword;
