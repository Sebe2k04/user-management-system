import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex ">
      <Navbar />
      <div className="w-full">
        <div className="h-full lg:pt-10 px-8 lg:pr-20 lg:pl-10 pt-20 w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
