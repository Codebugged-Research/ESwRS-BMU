import React from "react";
import RouteFormCard from "../../components/Cards/RouteFormCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <RouteFormCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
