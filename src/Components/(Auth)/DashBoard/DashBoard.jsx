"use client";
import { Button } from "antd";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import SideNavBar from "./SideNavBar";

function DashBoard() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      
      // router.push("/sign-in");
    }
  }, [session, router]);

  return (
    <div className="bg-violet-100">
      <div className="container mx-auto py-32">
        {session ? (
          <div className="text-center">
            <h1>Welcome back, {session?.user?.name}</h1>
            <h1>{session?.user?.email}</h1>
            <Button type="primary" onClick={() => signOut()} className="">
              Sign out
            </Button>
          </div>
        ) : (
          <p>Loding...</p>
        )}
      </div>
      <SideNavBar/>
    </div>
  );
}

export default DashBoard;
