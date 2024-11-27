"use client";

import Pagination from "@/components/Pagination";
import { axiosInstance } from "@/utils/axiosConfig";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axiosInstance.get("/users/");
      console.log(res.data);
      setUsers(res.data);
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Users</h1>
      <div className="py-10 flex flex-wrap gap-10 justify-around">
        {users &&
          users.map((user,i) => {
            return (
              <div key={i} className="rounded-xl shadow-md p-5">
                <div className="flex gap-5">
                  <div className="">
                    {user.image && <Image src='path' width='100' height='100' alt='' className="w-10 h-10 rounded-full" />
                    }
                  </div>
                  <div className="">
                    <h1 className="capitalize">{user.name}</h1>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">{user.email}</div>
              </div>
            );
          })}
      </div>
      <div className="flex justify-center">
      <Pagination/>
      </div>
    </div>
  );
}
