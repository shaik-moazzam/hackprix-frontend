"use client";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/redux/userContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Verification = () => {
  const params = usePathname();
  const { state } = useUser();
  const user = state.user;
  useEffect(() => {
    if (!params.includes("verification")) {
      if (user) {
        if (!user.class || !user.phone) {
          toast({
            title: "Please Complete your Profile",
            action: (
              <ToastAction altText="Try again">
                <Link href={"/verification"}>Complete Now</Link>
              </ToastAction>
            ),
          });
        }
      }
    }
  }, [user]);

  const { toast, handleToastClick } = useToast();
};

export default Verification;
