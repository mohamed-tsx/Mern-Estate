import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col">
        <img
          src={currentUser.avatar}
          className="rounded-full w-24 h-24 object-cover cursor-pointer self-center mt-2"
          alt=""
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border rounded-lg p-3"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border rounded-lg p-3"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border rounded-lg p-3"
        />
        <button className="bg-slate-700 text-white rounded-lg uppercase p-3 hover:opacity-95 disabled:opacity-85">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
