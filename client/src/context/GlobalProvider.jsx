"use client";
import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userAuth, setUserAuth] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  return (
    <GlobalContext.Provider
      value={{
        userData,
        setUserData,
        userAuth,
        setUserAuth,
        searchTerm,
        setSearchTerm,
        pagination,
        setPagination,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
