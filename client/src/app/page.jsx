import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" hero-animate bg-fixed lg:px-20 px-8 bg-gradient-to-bl from-gray-400 via-white to-gray-400 h-[100vh] ">
      <div className=" relative">
        <div className="py-5 ">
          <div className="p-3 rounded-2xl flex justify-between items-center bg-white/50 border backdrop-blur-md">
            <div className="relative">
              <pre className="absolute top-[-15px] text-3xl pl-5 hello">
                Ums - rbac
              </pre>
            </div>
            <div className="flex items-center gap-7">
            <h1>Home</h1>
            <h1>About</h1>
            <div className="px-4 py-1 bg-black rounded-xl text-white">
              <Link href={"/login"}>Let&apos;s go</Link>
            </div>
            </div>
          </div>
        </div>
        <div className="h-[80vh] flex items-center justify-center ">
          <div className="">
            <h1 className="font-semibold text-center text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-black drop-shadow-md tracking-[15px] shadow-black ec">
              UMS - RBAC
            </h1>
            <p className="text-center pt-3">
              User Management System with Role Based Access Controls
            </p>
            <div className="flex justify-center pt-2">
              <Link
                href={"/login"}
                className="text-white bg-black py-1 px-3 rounded-2xl shadow-md shadow-gray-300 "
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
