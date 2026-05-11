"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const GetStartedBtn = () => {
  const { data: session, status } = useSession();

  console.log(session?.user);

  if (status === "loading") {
    return <p>loading...</p>;
  }

  return (
    <>
      {session?.user ? (
        <Link
          href={'/account'}
          className="btn btn-primary btn-outline hover:bg-primary/90 text-white transition-all px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-primary/10 active:scale-95"
        >
          {session.user.name}
        </Link>
      ) : (
        <Link
          href={session ? "/feeds" : "/login"}
          className="bg-primary hover:bg-primary/90 text-white transition-all px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-primary/10 active:scale-95"
        >
          Get Started
        </Link>
      )}
    </>
  );
};

export default GetStartedBtn;
