import React from "react";
import StationEditCard from "../../components/Cards/StationEditCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <StationEditCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
