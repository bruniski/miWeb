"use client";
import { signOut, useSession } from "next-auth/react";

const Page = () => {
  const session = useSession();

  return (
    <>
      {session.status === "loading" ? (
        <p>loading</p>
      ) : (
        <div>
          <button onClick={() => signOut("Google")}>LogOut</button>
        </div>
      )}
    </>
  );
};

export default Page;
