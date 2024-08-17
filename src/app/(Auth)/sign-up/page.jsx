import SignUp from "@/Components/(Auth)/SignUp/SignUp";
import React from "react";
import { authOptions } from "../../../../lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return (
    <div>
      <SignUp></SignUp>
    </div>
  );
}
