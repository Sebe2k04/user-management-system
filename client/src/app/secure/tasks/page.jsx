"use client"

import Pagination from "@/components/Pagination";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
   
    return (
        <div>
            <h1 className="text-2xl font-semibold">Assigned Tasks</h1>
            <div className="py-10 flex justify-around gap-5">
                <div className="rounded-xl shadow-md p-5">
                    <h1 className="font-semibold">Task Name</h1>
                    <h4 className="text-gray-400 text-sm"><span className="text-black/70 font-semibold">Assigned By : </span>Team Lead</h4>
                    <h4 className="text-gray-400 text-sm"><span className="text-black/70 font-semibold">Priority : </span>Low</h4>
                    <h4 className="text-gray-400 text-sm"><span className="text-black/70 font-semibold">DeadLine : </span>18/12/2024</h4>
                    <div className="pt-2">
                        <Link href={"/secure/tasks"} className="bg-black text-sm text-white px-2 py-1 rounded-md">Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
            <Pagination/>
            </div>
        </div>
    );
}