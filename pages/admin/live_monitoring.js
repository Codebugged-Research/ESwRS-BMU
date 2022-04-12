import React from "react";
import Admin from "../../layouts/Admin";
import { UseSession } from "next-auth/react";
import { UseRouter } from "next/router";
import { UseEffect } from "react";
import LiveMonitoringCard from "../../components/Cards/LiveMonitoringCard";

const liveMonitoring = () => {
  const router = UseRouter();
  const { data: session } = UseSession();

  UseEffect(() => {
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
