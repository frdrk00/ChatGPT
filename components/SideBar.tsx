"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import Image from "next/image";

const SideBar = () => {
  const { data: session } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>

          {/* Map through there ChatTows */}
        </div>
      </div>
      {session && (
        <Image
          onClick={() => signOut()}
          src={session.user?.image!}
          width={50}
          height={50}
          alt="Profile pic"
          className="rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
};

export default SideBar;
