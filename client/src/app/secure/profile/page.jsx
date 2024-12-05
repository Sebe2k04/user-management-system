"use client";

import { useGlobalContext } from "@/context/GlobalProvider";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  const { userData } = useGlobalContext();
  console.log(userData);
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
                    value={userData.name}
                    readOnly
                    className="text-gray-500 border px-3 py-1 rounded-md focus:outline-none"
                  />
                </div>
                <div className="grid gap-2 w-fit">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    value={userData.email}
                    readOnly
                    className="text-gray-500 border px-3 py-1 rounded-md focus:outline-none"
                  />
                </div>
                <div className="grid gap-2 w-full">
                  <label htmlFor="">Summary</label>
                  <textarea
                    value={userData.summary}
                    readOnly
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
                  src={userData.profileImage}
                  width="500"
                  height="500"
                  alt=""
                  className="lg:w-[200px] w-[100px] rounded-full border"
                />
              </div>
              <h1 className="text-center py-2">Profile Pic</h1>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href={"/secure/profile/edit"} className="py-2 px-4 rounded-mdc font-semibold rounded-xl text-white bg-black">
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
