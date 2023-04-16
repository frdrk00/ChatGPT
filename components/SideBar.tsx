"use client";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/firebase";
import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import Image from "next/image";
import ChatRow from "./ChatRow";


const SideBar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db, 'users', session.user?.email!, 'chats')
  )

  console.log(chats);
  
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>

          {/* Map through there ChatTows */}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
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
