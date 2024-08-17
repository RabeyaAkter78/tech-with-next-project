import SignIn from "@/Components/(Auth)/SignIn/SignIn";
import React from "react";
import { authOptions } from "../../../../lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function signInPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return (
    <div className=" py-48 ">
      <SignIn></SignIn>
    </div>
  );
}
