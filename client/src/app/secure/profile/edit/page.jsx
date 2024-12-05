"use client";

import { useGlobalContext } from "@/context/GlobalProvider";
import { axiosInstance } from "@/utils/axiosConfig";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Page() {
  const { userData } = useGlobalContext();
  console.log(userData);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  useEffect(() => {
    fetch = async () => {
      const res = await axiosInstance.get(`/users/me`);
      console.log(res.data);
      setName(res.data[0].name);
      setEmail(res.data[0].email);
      //   setImage(res.data.profileImage);
      setSummary(res.data[0].summary);
    };
    fetch();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await axiosInstance.put(`/users/${userData._id}`, {
        name,
        email,
        summary,
        image,
      });
      console.log(res.data);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    userData && (
      <div>
        <div className="">
          <h1 className="capitalize font-semibold text-2xl">My Profile</h1>
          <div className="py-10 grid lg:grid-cols-3 grid-cols-1  w-full">
            <div className="col-span-2 lg:order-1 order-2 lg:px-10">
              <form action="" className="flex flex-wrap gap-4 justify-between">
                <div className="grid gap-2 w-fit">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-gray-500 border px-3 py-1 rounded-md focus:outline-none"
                  />
                </div>
                <div className="grid gap-2 w-fit">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-gray-500 border px-3 py-1 rounded-md focus:outline-none"
                  />
                </div>
                <div className="grid gap-2 w-full">
                  <label htmlFor="">Summary</label>
                  <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    maxLength={200}
                    className=" text-gray-500  border px-3 py-1 rounded-md min-h-[100px] focus:outline-none"
                    name="summary"
                    id="summary"
                  ></textarea>
                  {/* <input type="text" value={userData.email} readOnly className="text-gray-500 border px-3 py-1 rounded-md focus:outline-none" /> */}
                </div>
              </form>
            </div>
            <div className="order-1 grid lg:order-2 w-full ">
              <div className="flex justify-center">
                <Image
                  src={
                    image ? URL.createObjectURL(image) : userData.profileImage
                  }
                  width="500"
                  height="500"
                  alt=""
                  className="lg:w-[200px] aspect-square object-cover  w-[100px] rounded-full border"
                />
                {/* <Image
                  src={userData.profileImage}
                 
                /> */}
              </div>
              <div className="flex justify-center pt-5">
                <input
                  type="file"
                  id="upload"
                  onChange={(e) => setImage(e.target.files[0])}
                  hidden
                />
                <label
                  htmlFor="upload"
                  className="bg-black hover:scale-105 duration-200 text-white font-semibold rounded-xl w-fit px-4 py-1.5"
                >
                  Update Pic
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="py-2 px-4 rounded-mdc font-semibold rounded-xl text-white bg-black">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    )
  );
}
