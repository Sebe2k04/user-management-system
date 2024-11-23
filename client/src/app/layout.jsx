import GlobalProvider from "@/context/GlobalProvider";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "UMS | RBAC",
  description: "User Management System based on Role based Access control",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter antialiased`}>
        <GlobalProvider>
          {children}
          <ToastContainer />
        </GlobalProvider>
      </body>
    </html>
  );
}
