import React from "react";
import UserTable from "../../components/Cards/UserTable.js";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

// components

// layout for page

import Admin from "../../layouts/Admin.js";

export default function Tables() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <UserTable />
        </div>
      </div>
    </div>
  );
}

Tables.layout = Admin;
