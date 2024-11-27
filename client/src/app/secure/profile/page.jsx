"use client";

import { useGlobalContext } from "@/context/GlobalProvider";

export default function Page() {
  const { userData } = useGlobalContext();
  console.log(userData);
  return <div>
    <div className="">
      <h1 className="capitalize font-semibold text-2xl">Welcome {userData && userData.name}</h1>
    </div>
  </div>;
}
