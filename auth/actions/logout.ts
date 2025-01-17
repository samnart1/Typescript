"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // server actions before signing out
  await signOut();
};
