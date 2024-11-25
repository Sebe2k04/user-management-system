"use client";

import { useGlobalContext } from "@/context/GlobalProvider";

export default function Page() {
  const { userData } = useGlobalContext();
  console.log(userData);
  return <div></div>;
}
