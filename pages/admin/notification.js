import React from "react";
import NotificationTable from "../../components/Cards/NotificationTable";
import Admin from "../../layouts/Admin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const notification = () => {
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
          <NotificationTable />
        </div>
        {/* <div className="w-full mb-12 px-4">
        <CardTable color="dark" />
      </div> */}
      </div>
    </div>
  );
};

export default notification;

notification.layout = Admin;
