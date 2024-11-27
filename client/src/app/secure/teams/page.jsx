"use client"
import Pagination from "@/components/Pagination";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="flex lg:justify-between items-center ">
        <h1 className="font-semibold text-2xl">Teams</h1>
        <div className="">
          <Link href="/team/create">
            <button className="bg-black text-white px-3 py-1.5 rounded-xl">
              Create Team
            </button>
          </Link>
        </div>
      </div>
      <div className="py-10 flex justify-around">
        <div className="rounded-xl shadow-md p-5">
          <div className="flex gap-5">
            <h1 className="capitalize text-xl font-semibold">Team Zen</h1>
          </div>
          <div className="text-gray-400 text-sm">
            <span className="text-black font-semibold">Lead : </span>Sebe
          </div>
          <div className="pt-2">
            <h1 className="font-semibold">Members</h1>
            <div className="flex pt-1 gap-2">
              <div className=" relative min-h-10 min-w-[60px]">
                <div className="w-8 h-8 bg-black rounded-full absolute top-0 left-0 z-[5]"></div>
                <div className="w-8 h-8 bg-red-300 rounded-full absolute top-0  left-[15px] z-[6]"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full absolute top-0 left-[30px] z-[7]"></div>
              </div>
              <div className="pt-1.5"><h1 className="text-center text-sm text-gray-400">5 more...</h1></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <Pagination/>
      </div>
    </div>
  );
}
