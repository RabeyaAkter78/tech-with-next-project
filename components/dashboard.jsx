"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto my-32">
      {session ? (
        <>
          <h1>Welcome back, {session.user.name}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <h1>You are not logged in</h1>
          <button
            onClick={() => {
              signIn("github");
            }}
          >
            Sign in with GitHub
          </button>
          <button
            onClick={() => {
              signIn("google");
            }}
          >
            Sign in with Google
          </button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
