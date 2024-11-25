import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex ">
      <Navbar />
      <div className=" h-full w-full">{children}</div>
    </div>
  );
}
