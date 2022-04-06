import React from "react";
import StationFormCard from "../../components/Cards/StationFormCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <SationFormCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
