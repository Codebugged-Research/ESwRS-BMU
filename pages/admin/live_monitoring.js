import React from "react";
import Admin from "../../layouts/Admin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LiveMonitoringCard from "../../components/Cards/LiveMonitoringCard";

const liveMonitoring = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <LiveMonitoringCard />
    </div>
  );
};

export default liveMonitoring;

liveMonitoring.layout = Admin;
