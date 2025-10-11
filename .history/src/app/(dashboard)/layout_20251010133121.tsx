// app/(dashboard)/layout.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { onLoginUser } from "@/actions/auth";
import SideBar from "@/components/sidebar";
import { ChatProvider } from "@/context/user-chat-context";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const OwnerLayout = async ({ children }: Props) => {
  // Step 1: Check Clerk authentication
  const user = await currentUser();
  if (!user) {
    redirect("/auth/sign-in");
  }

  // Step 2: Fetch your own DB user (optional but powerful)
  // After (TypeScript-safe)
  const authenticated = await onLoginUser()


  // Step 3: Handle case where user exists in Clerk but not your DB
  if (!authenticated) {
    redirect("/auth/sign-in");
  }

  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <SideBar domains={authenticated.domain} />
        <div className="w-full h-screen flex flex-col pl-20 md:p-8 bg-gray-50">
          {children}
        </div>
      </div>
    </ChatProvider>
  );
};

export default OwnerLayout;
