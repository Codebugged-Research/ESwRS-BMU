import React from "react";
import NotificationTable from "../../components/Cards/NotificationTable";
import Admin from "../../layouts/Admin";
import { UseSession } from "next-auth/react";
import { UseRouter } from "next/router";
import { UseEffect } from "react";

const notification = () => {
  const router = UseRouter();
  const { data: session } = UseSession();

  UseEffect(() => {
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
