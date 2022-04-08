import React from "react";
import RouteEditCard from "../../components/Cards/RouteEditCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <RouteEditCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
