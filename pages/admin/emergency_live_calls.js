import React from "react";
import Admin from "../../layouts/Admin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const emergency_live_calls = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  return <div>emergency_live_calls</div>;
};

export default emergency_live_calls;

emergency_live_calls.layout = Admin;
