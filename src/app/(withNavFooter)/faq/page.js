import Faq from "@/Components/(WithNavFooter)/Faq/Faq";
import { getServerSession } from "next-auth";
import React from "react";
import authOptions from "../../../../lib/authOptions";
import { redirect } from "next/navigation";

export default async function FaqPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/sign-in");
  return (
    <div className="container mx-auto my-32">
      <Faq></Faq>
    </div>
  );
}
