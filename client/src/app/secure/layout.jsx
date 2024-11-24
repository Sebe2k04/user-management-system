import Navbar from "@/components/Navbar";

export default function Layout({children}) {
    return (
        <section className="flex ">
        <Navbar />
        <div className=" h-full w-full">
          {children}
        </div>
      </section>
    );
}