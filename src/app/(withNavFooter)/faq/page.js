// eslint-disable-next-line @next/next/no-async-client-component
// "use client";

import Faq from "@/Components/(WithNavFooter)/Faq/Faq";
import { getServerSession } from "next-auth";
import React from "react";
import authOptions from "../../../../lib/authOptions";
// import { redirect, useRouter } from "next/navigation";

export default async function FaqPage() {
  // const router = useRouter();
  const session = await getServerSession(authOptions);
  // if (!session) redirect("/sign-in");
  return (
    <div className="container mx-auto my-32">
      <Faq></Faq>
    </div>
  );
}
