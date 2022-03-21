import React from "react";
import Admin from "../../layouts/Admin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import EmergencyTable from "../../components/Cards/EmergengyTable";

const emergency_live_calls = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <EmergencyTable />
          </div>
          {/* <div className="w-full mb-12 px-4">
      <CardTable color="dark" />
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default emergency_live_calls;

emergency_live_calls.layout = Admin;
